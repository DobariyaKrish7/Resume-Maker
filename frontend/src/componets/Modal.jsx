import React from 'react';
import { X } from 'lucide-react';
import { modalStyles as styles } from '../assets/dummystyle.js';

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
  onLoginClick,
  showActionBtn,
  actionBtnIcon = null,
  actionBtnText , onActionClick = () => { },
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {!hideHeader && (
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <button className={styles.closeButton} onClick={onClose}>
              <X size={20} />
            </button>

            {showActionBtn && (
              <button className={styles.actionButton} onClick={onActionClick}>
                  {actionBtnIcon}
                  {actionBtnText}
              </button>
            )}
          </div>
        )}

        <div className={styles.body}>
          {children}
          <button
            className=''
            onClick={onLoginClick ?? onClose} // ✅ safe fallback
          >
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// const Modal = ({
//   children,
//   isOpen,
//   onClose,
//   title,
//   hideHeader,
//   showActionBtn,
//   actionBtnIcon = null,
//   actionBtnText,
//   onActionClick = () => {},
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.container}>
//         {!hideHeader && (
//           <div className={styles.header}>
//             <h3 className={styles.title}>{title}</h3>
//             <div className="flex items-center gap-2 ml-auto">
//               {showActionBtn && (
//                 <button className={styles.actionButton} onClick={onActionClick}>
//                   {actionBtnIcon}
//                   {actionBtnText}
//                 </button>
//               )}
//               <button className={styles.closeButton} onClick={onClose}>
//                 <X size={20} />
//               </button>
//             </div>
//           </div>
//         )}

//         <div className={styles.body}>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Modal;





