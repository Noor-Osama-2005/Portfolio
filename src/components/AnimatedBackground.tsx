import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  color: string;
  twinkle: number;
  originalX: number;
  originalY: number;
  isInteractive: boolean;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const frameCountRef = useRef(0);

  useEffect(() => {
    // Detect dark mode
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = isDarkMode ? [
      'rgba(139, 92, 246, 0.6)',   // violet
      'rgba(99, 102, 241, 0.5)',   // indigo
      'rgba(59, 130, 246, 0.4)',   // blue
      'rgba(168, 85, 247, 0.4)',   // purple
      'rgba(255, 255, 255, 0.3)',  // white
    ] : [
      'rgba(99, 102, 241, 0.4)',   // indigo
      'rgba(139, 92, 246, 0.3)',   // violet  
      'rgba(59, 130, 246, 0.3)',   // blue
      'rgba(168, 85, 247, 0.3)',   // purple
      'rgba(79, 70, 229, 0.2)',    // darker indigo
    ];

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 12000)); // Higher density
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const isInteractive = Math.random() < 0.8; // 80% interactive
        
        particles.push({
          x,
          y,
          originalX: x,
          originalY: y,
          size: Math.random() * 2.5 + 0.8,
          opacity: Math.random() * 0.6 + 0.2,
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          twinkle: Math.random() * Math.PI * 2,
          isInteractive
        });
      }
      
      particlesRef.current = particles;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const animate = () => {
      frameCountRef.current++;
      
      // Skip frames for better performance
      if (frameCountRef.current % 2 !== 0) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      // Simple background clear
      ctx.fillStyle = isDarkMode ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        if (particle.isInteractive) {
          // Enhanced mouse interaction
          const mouseDistance = Math.sqrt(
            Math.pow(mouseRef.current.x - particle.x, 2) + 
            Math.pow(mouseRef.current.y - particle.y, 2)
          );
          
          if (mouseDistance < 120) {
            const force = (120 - mouseDistance) / 120;
            const angle = Math.atan2(
              particle.y - mouseRef.current.y,
              particle.x - mouseRef.current.x
            );
            
            particle.x += Math.cos(angle) * force * 2;
            particle.y += Math.sin(angle) * force * 2;
          } else {
            // Continue normal movement while returning to general area
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Gentle drift back toward original position
            particle.x += (particle.originalX - particle.x) * 0.003;
            particle.y += (particle.originalY - particle.y) * 0.003;
          }
          
          // Wrap around edges for interactive particles too
          if (particle.x < -10) particle.x = canvas.width + 10;
          if (particle.x > canvas.width + 10) particle.x = -10;
          if (particle.y < -10) particle.y = canvas.height + 10;
          if (particle.y > canvas.height + 10) particle.y = -10;
        } else {
          // Regular movement - continue in their direction
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }
        
        // Enhanced twinkle
        particle.twinkle += 0.035;
        const twinkleMultiplier = 0.6 + 0.4 * Math.sin(particle.twinkle);
        
        // Draw simple particle with glow
        const currentOpacity = particle.opacity * twinkleMultiplier;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color.replace(/[\d.]+\)$/, `${currentOpacity * 0.5})`));
        gradient.addColorStop(1, particle.color.replace(/[\d.]+\)$/, '0)'));
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Inner particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${currentOpacity})`);
        ctx.fill();
      });
      
      // Complex multi-layered connection system
      if (frameCountRef.current % 2 === 0) {
        const connectionsDrawn = new Set<string>();
        const triangles: Array<[Particle, Particle, Particle]> = [];
        
        // Layer 1: Primary connections
        particlesRef.current.forEach((particle, i) => {
          let connectionCount = 0;
          const maxConnections = 4;
          
          particlesRef.current.slice(i + 1).forEach((otherParticle, j) => {
            if (connectionCount >= maxConnections) return;
            
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const connectionKey = `${i}-${i + j + 1}`;
            
            if (distance < 100) {
              connectionCount++;
              connectionsDrawn.add(connectionKey);
              
              const baseOpacity = 0.3 * (1 - distance / 100);
              const mouseDistance = Math.sqrt(
                Math.pow(mouseRef.current.x - (particle.x + otherParticle.x) / 2, 2) + 
                Math.pow(mouseRef.current.y - (particle.y + otherParticle.y) / 2, 2)
              );
              const mouseEffect = mouseDistance < 150 ? 1.5 : 1;
              const opacity = Math.min(baseOpacity * mouseEffect, 0.6);
              
              // Animated connection with gradient
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y, 
                otherParticle.x, otherParticle.y
              );
              
              const color1 = particle.color.replace(/[\d.]+\)$/, `${opacity})`);
              const color2 = otherParticle.color.replace(/[\d.]+\)$/, `${opacity})`);
              const midColor = isDarkMode ? 
                `rgba(147, 197, 253, ${opacity * 0.8})` : 
                `rgba(99, 102, 241, ${opacity * 0.8})`;
              
              gradient.addColorStop(0, color1);
              gradient.addColorStop(0.5, midColor);
              gradient.addColorStop(1, color2);
              
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = opacity * 2;
              ctx.stroke();
              
              // Flowing energy effect
              if (mouseDistance < 100) {
                const flowOffset = (frameCountRef.current * 0.15) % 1;
                const flowX = particle.x + (otherParticle.x - particle.x) * flowOffset;
                const flowY = particle.y + (otherParticle.y - particle.y) * flowOffset;
                
                const energyGradient = ctx.createRadialGradient(
                  flowX, flowY, 0,
                  flowX, flowY, 8
                );
                energyGradient.addColorStop(0, isDarkMode ? 
                  `rgba(147, 197, 253, ${opacity * 2})` : 
                  `rgba(99, 102, 241, ${opacity * 2})`);
                energyGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                
                ctx.beginPath();
                ctx.arc(flowX, flowY, 4, 0, Math.PI * 2);
                ctx.fillStyle = energyGradient;
                ctx.fill();
              }
            }
            
            // Collect potential triangles
            if (distance < 120) {
              particlesRef.current.slice(i + j + 2).forEach((thirdParticle, k) => {
                const dx2 = particle.x - thirdParticle.x;
                const dy2 = particle.y - thirdParticle.y;
                const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                
                const dx3 = otherParticle.x - thirdParticle.x;
                const dy3 = otherParticle.y - thirdParticle.y;
                const distance3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
                
                if (distance2 < 120 && distance3 < 120) {
                  triangles.push([particle, otherParticle, thirdParticle]);
                }
              });
            }
          });
        });
        
        // Layer 2: Secondary web connections (longer range, thinner)
        if (frameCountRef.current % 4 === 0) {
          particlesRef.current.forEach((particle, i) => {
            let longConnections = 0;
            const maxLongConnections = 2;
            
            particlesRef.current.slice(i + 1).forEach((otherParticle, j) => {
              if (longConnections >= maxLongConnections) return;
              
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const connectionKey = `${i}-${i + j + 1}`;
              
              if (distance > 100 && distance < 180 && !connectionsDrawn.has(connectionKey)) {
                longConnections++;
                const opacity = 0.15 * (1 - (distance - 100) / 80);
                
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = isDarkMode ? 
                  `rgba(168, 85, 247, ${opacity})` : 
                  `rgba(139, 92, 246, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.setLineDash([5, 10]);
                ctx.stroke();
                ctx.setLineDash([]);
              }
            });
          });
        }
        
        // Layer 3: Triangle fills for constellation effect
        if (frameCountRef.current % 6 === 0 && triangles.length > 0) {
          triangles.slice(0, 5).forEach((triangle) => {
            const [p1, p2, p3] = triangle;
            
            // Calculate triangle center
            const centerX = (p1.x + p2.x + p3.x) / 3;
            const centerY = (p1.y + p2.y + p3.y) / 3;
            
            // Check if triangle is reasonably sized
            const area = Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
            if (area > 1000 && area < 8000) {
              const opacity = 0.08;
              
              const triangleGradient = ctx.createRadialGradient(
                centerX, centerY, 0,
                centerX, centerY, Math.sqrt(area) / 2
              );
              triangleGradient.addColorStop(0, isDarkMode ? 
                `rgba(139, 92, 246, ${opacity})` : 
                `rgba(99, 102, 241, ${opacity})`);
              triangleGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
              
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.lineTo(p3.x, p3.y);
              ctx.closePath();
              ctx.fillStyle = triangleGradient;
              ctx.fill();
            }
          });
        }
        
        // Layer 4: Pulse connections near mouse
        particlesRef.current.forEach((particle) => {
          const mouseDistance = Math.sqrt(
            Math.pow(mouseRef.current.x - particle.x, 2) + 
            Math.pow(mouseRef.current.y - particle.y, 2)
          );
          
          if (mouseDistance < 80) {
            const pulseRadius = 20 + 10 * Math.sin(frameCountRef.current * 0.1);
            const pulseOpacity = 0.3 * (1 - mouseDistance / 80) * (1 + Math.sin(frameCountRef.current * 0.15)) / 2;
            
            const pulseGradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, pulseRadius
            );
            pulseGradient.addColorStop(0, `rgba(255, 255, 255, ${pulseOpacity})`);
            pulseGradient.addColorStop(0.7, isDarkMode ? 
              `rgba(147, 197, 253, ${pulseOpacity * 0.5})` : 
              `rgba(99, 102, 241, ${pulseOpacity * 0.5})`);
            pulseGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, pulseRadius, 0, Math.PI * 2);
            ctx.fillStyle = pulseGradient;
            ctx.fill();
          }
        });
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Initialize with delay to prevent blocking
    setTimeout(() => {
      resizeCanvas();
      createParticles();
      animate();
    }, 100);

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Throttle mouse events
    let mouseMoveTimeout: NodeJS.Timeout;
    const throttledMouseMove = (event: MouseEvent) => {
      if (mouseMoveTimeout) return;
      mouseMoveTimeout = setTimeout(() => {
        handleMouseMove(event);
        mouseMoveTimeout = null as any;
      }, 16); // ~60fps
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', throttledMouseMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mouseMoveTimeout) {
        clearTimeout(mouseMoveTimeout);
      }
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}