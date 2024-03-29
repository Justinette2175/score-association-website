import { HeaderData, ParagraphData } from "../../Types";

const textTypeToClass: Record<HeaderData["type"], string> = {
  h1: "text-8xl mb-8",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-1xl"
};

const textAlignToClass: Record<HeaderData["align"], string> = {
  center: "text-center",
  left: "text-left",
  right: "text-right"
};

const sizeToClass: Record<string, string> = {
  sm: "text-sm",
  md: "",
  lg: "text-lg",
  xl: "text-xl"
};

export function getTextClasses(text: HeaderData | ParagraphData) {
  const classes = [];
  if (text.__component === "header" && text.type) {
    classes.push("font-serif");
    classes.push(textTypeToClass[text.type]);
  }
  if (text.__component === "paragraph" && text.bullet) {
    classes.push("list-disc ml-4");
  }
  if (text.__component === "paragraph" && text.size) {
    classes.push(sizeToClass[text.size]);
  }
  if (text.__component === "paragraph" && text.bold) {
    classes.push("font-bold");
  }
  if (text.align) {
    classes.push(textAlignToClass[text.align]);
  }
  return classes.join(" ");
}
