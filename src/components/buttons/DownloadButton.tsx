import "./DownloadButton.css";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}
function DownloadButton({ onClick, children }: Props) {
  return (
    <button onClick={onClick} className="button-73" role="button">
      {children}
    </button>
  );
}

export default DownloadButton;
