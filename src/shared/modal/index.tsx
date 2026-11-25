import { useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { LuX } from 'react-icons/lu';
import type { ModalProps } from '../../types/modal';
import { Overlay, Dialog, Header, Title, CloseButton } from './Style';

export default function Modal({ title, closeLabel, onClose, children }: ModalProps) {
  const titleId = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onClose}>
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <Header>
          <Title id={titleId}>{title}</Title>
          <CloseButton type="button" aria-label={closeLabel} onClick={onClose}>
            <LuX />
          </CloseButton>
        </Header>
        {children}
      </Dialog>
    </Overlay>,
    document.body,
  );
}