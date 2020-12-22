
var _MemoButton = ({ children, onClick }) => {
  const refCount = React.useRef(0);
  const refMemoTipEl = React.useRef(null);
  useEffect(() => {
    refCount.current += 1;
    gsap.fromTo(
      refMemoTipEl.current,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 0.35,
        ease: 'back.out(1.7)',
      },
    );
  });
  return (
    <div className="my-button memo-btn memo-btn--on">
      <span className="memo-btn__redner-tip" ref={refMemoTipEl}>{refCount.current}</span>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

var MemoButton = React.memo(_MemoButton);
