// import React from 'react'
// import { X } from 'lucide-react';
// import { modalStyles as styles } from '../assets/dummystyle'

// const Modal = ({
//     children,isOpen,onClose,title,hideHeader
// }) => {
//     if(!isOpen) return null
//   return (
//     <div className={styles.overlay}>
//         <div className={styles.container}>
//             {!hideHeader && (
//                 <div className={styles.header}>
//                     <h3 className={styles.title}>
//                         {title}
//                     </h3>
//                 </div>
//             )}

//             <button type='button' className={styles.closeButton} onClick={onClose}>
//                 <X size={25}/>
//             </button>
            
//             <div className={styles.body}>
//                 {children}
//             </div>
//         </div>
//     </div>
//   )
// }

//  export default Modal

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

// import React from 'react';
// import { X } from 'lucide-react';
// import { modalStyles as styles } from '../assets/dummystyle.js';

// const Modal = ({
//   children,
//   isOpen,
//   onClose,
//   title,
//   hideHeader,
//   onLoginClick, // optional
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

//             {/* Optional Action Button */}
//             {showActionBtn && (
//               <button className={styles.actionButton} onClick={onActionClick}>
//                 {actionBtnIcon}
//                 {actionBtnText}
//               </button>
//             )}

//             {/* Close Button */}
//             <button className={styles.closeButton} onClick={onClose}>
//               <X size={20} />
//             </button>
//           </div>
//         )}

//         <div className={styles.body}>
//           {children}

//           {/* Optional Login Button */}
//           {onLoginClick && (
//             <button
//               className={styles.actionButton}
//               onClick={onLoginClick}
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;




