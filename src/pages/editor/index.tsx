import { useTranslation } from "react-i18next";

import "@pages/editor/index.css";

export const EditorPage = () => {
  const { t } = useTranslation();

  const text = "# Hello world\n\nThis is a test text.\n";

  return (
    <div className="z-10 relative flex flex-col self-center w-full max-w-5xl">
      {text.split("\n").map((line) => (
        <div
          className="outline-none"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          {line}
        </div>
      ))}
    </div>
  );
};
