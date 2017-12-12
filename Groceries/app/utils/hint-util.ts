import { Color } from "color";
import { TextField } from "ui/text-field";

declare var NSAttributedString: any;
declare var NSDictionary: any;
declare var NSForegroundColorAttributeName: any;

/*
see this: https://github.com/NativeScript/docs/issues/431
for a better way to do this!
*/

export function setHintColor(args: { view: TextField, color: Color }) {
  if (args.view.android) {
    args.view.android.setHintTextColor(args.color.android);
  }
  if (args.view.ios) {
    let dictionary = new NSDictionary(
      [args.color.ios],
      [NSForegroundColorAttributeName]
    );
    args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(
      args.view.hint, dictionary);
  }
}