import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ data }: { data: string }) => {
  return (
    <div>
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
