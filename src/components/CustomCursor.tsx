import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor - glowing dot with gradient */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[10000] transition-all duration-200"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px) scale(${isClicking ? 0.7 : isHovering ? 1.8 : 1})`,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full ${
            isHovering
              ? 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-[0_0_15px_3px_rgba(234,179,8,0.6)]'
              : isClicking
              ? 'bg-gradient-to-br from-red-500 to-pink-500 shadow-[0_0_15px_3px_rgba(239,68,68,0.6)]'
              : 'bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_10px_2px_rgba(34,211,238,0.5)]'
          } transition-all duration-150`}
        ></div>
      </div>

      {/* Trailing particle effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border-0 bg-gradient-to-r ${
            isHovering
              ? 'from-yellow-400/30 to-orange-500/30'
              : isClicking
              ? 'from-red-500/30 to-pink-500/30'
              : 'from-cyan-400/30 to-blue-500/30'
          } animate-[pulse_1.5s_ease-in-out_infinite]`}
        ></div>
      </div>
    </>
  );
};

export default CustomCursor;