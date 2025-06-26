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

// export default Modal

import React from 'react';
import { X } from 'lucide-react';
import { modalStyles as styles } from '../assets/dummystyle.js';

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
  onLoginClick // ✅ add this prop
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
          </div>
        )}

        <div className={styles.body}>
          {children}
          <button
            className={styles.actionButton}
            onClick={onLoginClick ?? onClose} // ✅ safe fallback
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;



// src/components/Modal.jsx
// import React from "react";

// export default function Modal({ isOpen, onClose, onLoginClick, children }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded shadow-lg relative">
//         <button onClick={onClose} className="absolute top-2 right-2 text-red-500">X</button>

//         {children}

//         <button
//           onClick={onLoginClick} // ✅ now uses prop
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }


