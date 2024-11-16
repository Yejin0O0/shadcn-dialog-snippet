function DialogCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-auto min-h-[204px] flex items-center justify-center">
      {children}
    </div>
  );
}

export default DialogCard;
