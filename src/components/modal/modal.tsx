'use client';
import {
  useState,
  useCallback,
  useRef,
  useEffect,
  MouseEventHandler,
} from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import styles from './modal.module.scss';

interface IModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = (props) => {
  const { children } = props;

  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (
        e.target === containerRef.current ||
        e.target === contentRef.current
      ) {
        handleDismiss?.();
      }
    },
    [handleDismiss]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.key === 'Escape' && handleDismiss();
    },
    [handleDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={containerRef}
      className={classNames(styles.container)}
      onClick={onClick}
    >
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
