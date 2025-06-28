// import React, { useEffect, useState } from 'react'
// import DashboardLayout from '../componets/DashboardLayout'
// import { dashboardStyles as styles } from '../assets/dummystyle'
// import { useNavigate } from 'react-router-dom'
// import { Loader, LucideFilePlus, LucideTrash2, TableRowsSplitIcon } from 'lucide-react'
// import axiosInstance from '../utils/axiosInstance'
// import { API_PATHS } from '../utils/apiPath'
// import { ResumeSummaryCard } from '../componets/Cards'
// import moment from 'moment'
// import Modal from '../componets/Modal'
// import CreateResumeForm from '../componets/CreateResumeForm'

// import toast from 'react-hot-toast'

// const Dashboard = () => {
//   const navigate = useNavigate()
//   const [openCreateModal,setOpenCreateModal] = useState(false)
//   const [allResume, setAllResume] = useState([])
//   const [loading,setLoading] = useState()
//   const [resumeToDelete,setresumeToDelete] = useState(null)
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  

//   // Calculate completion percentage for a resume
//   const calculateCompletion = (resume) => {
//     let completedFields = 0;
//     let totalFields = 0;

//     // Profile Info
//     totalFields += 3;
//     if (resume.profileInfo?.fullName) completedFields++;
//     if (resume.profileInfo?.designation) completedFields++;
//     if (resume.profileInfo?.summary) completedFields++;

//     // Contact Info
//     totalFields += 2;
//     if (resume.contactInfo?.email) completedFields++;
//     if (resume.contactInfo?.phone) completedFields++;

//     // Work Experience
//     resume.workExperience?.forEach(exp => {
//       totalFields += 5;
//       if (exp.company) completedFields++;
//       if (exp.role) completedFields++;
//       if (exp.startDate) completedFields++;
//       if (exp.endDate) completedFields++;
//       if (exp.description) completedFields++;
//     });

//     // Education
//     resume.education?.forEach(edu => {
//       totalFields += 4;
//       if (edu.degree) completedFields++;
//       if (edu.institution) completedFields++;
//       if (edu.startDate) completedFields++;
//       if (edu.endDate) completedFields++;
//     });

//     // Skills
//     resume.skills?.forEach(skill => {
//       totalFields += 2;
//       if (skill.name) completedFields++;
//       if (skill.progress > 0) completedFields++;
//     });

//     // Projects
//     resume.projects?.forEach(project => {
//       totalFields += 4;
//       if (project.title) completedFields++;
//       if (project.description) completedFields++;
//       if (project.github) completedFields++;
//       if (project.liveDemo) completedFields++;
//     });

//     // Certifications
//     resume.certifications?.forEach(cert => {
//       totalFields += 3;
//       if (cert.title) completedFields++;
//       if (cert.issuer) completedFields++;
//       if (cert.year) completedFields++;
//     });

//     // Languages
//     resume.languages?.forEach(lang => {
//       totalFields += 2;
//       if (lang.name) completedFields++;
//       if (lang.progress > 0) completedFields++;
//     });

//     // Interests
//     totalFields += (resume.interests?.length || 0);
//     completedFields += (resume.interests?.filter(i => i?.trim() !== "")?.length || 0);

//     return Math.round((completedFields / totalFields) * 100);
//   };


//   const fetchAllresumes = async() =>
//   {
//     try {
//       setLoading(true)
//       const response =await axiosInstance.get(API_PATHS.RESUME.GET_ALL)

//       //
//       const resumeWithCompletion = response.data.map(resume => ({
//         ...resume,
//         completion: calculateCompletion(resume)

//       }))

//       setAllResume(resumeWithCompletion)
      
//     } catch (error) {
//       console.error('error in fetching',error)
//     }
//     finally{
//       setLoading(false)
//     }
//   }


//   useEffect(()=> {
//     fetchAllresumes()
//   },[])

// const handleDeleteResume = async () =>
// {
//   if(!resumeToDelete) return

//   try {
//     await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeToDelete))
//     toast.success('resume deleted')
//     fetchAllresumes()
//   } catch (error) {
//     console.error('error in deleting resume',error)
//     toast.error('failed to delete resume')
    
//   }
//   finally{
//     setresumeToDelete(null)
//     showDeleteConfirm(false)
//   }

// }

// const handleDeleteClick = (id) =>
// {
//   setresumeToDelete(id)
//   setShowDeleteConfirm(true)
// }


//   return (
//     <DashboardLayout>
//         <div className={styles.container}>
//           <div className={styles.headerWrapper}>
//             <div>
//               <h1 className={styles.headerTitle}>
//                 MY resume
//               </h1>
//               <p className={styles.headerSubtitle}>
//                 {allResume.length > 0 ? `You have ${allResume.length} resume${allResume.length !==1 ? 's' : ''}` : 'You have no resume'}
//               </p>
//             </div>
//             <div className='flex gap-4'>
//               <button className={styles.createButton}
//                 onClick={()=> setOpenCreateModal(true)}>
//                 <div className={styles.createButtonOverlay}>
//                   <span className={styles.createButtonContent}>
//                     create resume
//                     <LucideFilePlus className='group-hover:translate-x-1 transition-transform' size={18}/>
//                   </span>
//                 </div>
//               </button>
//             </div>
//           </div>

//           {loading && (
//             <div className={styles.spinnerWrapper}>
//               <div className={styles.spinner}>
//                 </div>
//             </div>
//           )}

//           {!loading && allResume.length===0 && (
//             <div className={styles.emptyStateWrapper}>
//               <div className={styles.emptyIconWrapper}>
//                 <LucideFilePlus size={32} className='text-violet-600'/>
//               </div>
//               <h3 className={styles.emptyTitle}>
//                 no resume
//               </h3>
//               <p className={styles.emptyText}>
//                 You don't have any resume yet. Click the button below to create one.
//               </p>
//               <button className={styles.createButton}  onClick={() => setOpenCreateModal(true)}>
//                 <div className={styles.createButtonOverlay}>

//                 </div>
//                 <span className={styles.createButtonContent}>
//                   create resume
//                   <LucideFilePlus className='group-hover:translate-x-1 transition-transform' size={20}/>
//                 </span>
//               </button>
//             </div>
//           )}


//           {!loading && allResume.length > 0 &&
//           (
//             <div className={styles.grid}>
//               <div className={styles.newResumeCard} onClick={() => setOpenCreateModal(true)}>
//                 <div className={styles.newResumeIcon}>
//                   <LucideFilePlus size={32} className='text-white'/>
//                 </div>
//                 <h3 className={styles.newResumeTitle}>
//                   Your Resumes
//                 </h3>
//                 <p className={styles.newResumeText}>
//                   start building your resume today
//                 </p>
//               </div>
//               {allResume.map((resume) => (
//                 <ResumeSummaryCard key={resume._id} imgUrl={resume.thumbnailLink}
//                 title={resume.title} createdAt={resume.createdAt} updatedAt={resume.updatedAt}
//                 onSelect={() => navigate(` /resume/${resume._id}`)}
//                 onDelete={() => handleDeleteClick(resume._id)}
//                 completion={resume.completion || 0}
//                 isPremium ={resume.isPremium}
//                 isNew = {moment().diff(moment(resume.createdAt),'days' ) < 7}></ResumeSummaryCard>

//               ))}
//             </div>
            
//           )}
//         </div>

//         {/*modal*/}
//         <Modal isOpen={openCreateModal} onClose={() => setOpenCreateModal(false)}
//         hideHeader maxWidth="max-w-2xl">
//           <div className='p-6'>
//             <div className={styles.modalHeader}>
//               <h3 className={styles.modalTitle}>
//                 Create New Resume
//               </h3>
//               <button onClick={() => setOpenCreateModal(false)} className={styles.modalCloseButton}>
//                 X
//               </button>

//             </div>
//             <CreateResumeForm onSuccess={()=>
//               {
//                 setOpenCreateModal(false);
//                 fetchAllresumes()
//               }
//             }></CreateResumeForm>
//           </div>
//         </Modal>

//         <Modal isOpen={showDeleteConfirm} onClose={() => setShowDeleteConfirm(false)} title='Confirm Deletion'
//         showActionBtn actionBtnText='Delete' actionBtnClassName = 'bg-red-600 hover: bg-red-700'
//         onActionClick={handleDeleteResume}>
//           <div className='p-4'>
//             <div className='flex flex-col items-center text-center'>
//               <div className={styles.deleteIconWrapper}>
//                 <LucideTrash2  className='text-orange-600' size={24}/>
//               </div>
//               <h3 className={styles.deleteTitle}>
//                 Delete this resume
//               </h3>
//               <p className={styles.deleteText}>
//                 Are you sure you want to delete this resume?
//               </p>

//             </div>
//           </div>
//         </Modal>
//     </DashboardLayout>
//   )
// }

// export default Dashboard


import React, { useEffect, useState } from 'react';
import DashboardLayout from '../componets/DashboardLayout';
import { dashboardStyles as styles } from '../assets/dummystyle';
import { useNavigate } from 'react-router-dom';
import { LucideFilePlus, LucideTrash2 } from 'lucide-react';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPath';
import { ResumeSummaryCard } from '../componets/Cards';
import dayjs from 'dayjs';
// import moment from 'moment';
import Modal from '../componets/Modal';
import CreateResumeForm from '../componets/CreateResumeForm';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [allResume, setAllResume] = useState([]);
  const [loading, setLoading] = useState();
  const [resumeToDelete, setresumeToDelete] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const calculateCompletion = (resume) => {
    let completedFields = 0;
    let totalFields = 0;

    totalFields += 3;
    if (resume.profileInfo?.fullName) completedFields++;
    if (resume.profileInfo?.designation) completedFields++;
    if (resume.profileInfo?.summary) completedFields++;

    totalFields += 2;
    if (resume.contactInfo?.email) completedFields++;
    if (resume.contactInfo?.phone) completedFields++;

    resume.workExperience?.forEach(exp => {
      totalFields += 5;
      if (exp.company) completedFields++;
      if (exp.role) completedFields++;
      if (exp.startDate) completedFields++;
      if (exp.endDate) completedFields++;
      if (exp.description) completedFields++;
    });

    resume.education?.forEach(edu => {
      totalFields += 4;
      if (edu.degree) completedFields++;
      if (edu.institution) completedFields++;
      if (edu.startDate) completedFields++;
      if (edu.endDate) completedFields++;
    });

    resume.skills?.forEach(skill => {
      totalFields += 2;
      if (skill.name) completedFields++;
      if (skill.progress > 0) completedFields++;
    });

    resume.projects?.forEach(project => {
      totalFields += 4;
      if (project.title) completedFields++;
      if (project.description) completedFields++;
      if (project.github) completedFields++;
      if (project.liveDemo) completedFields++;
    });

    resume.certifications?.forEach(cert => {
      totalFields += 3;
      if (cert.title) completedFields++;
      if (cert.issuer) completedFields++;
      if (cert.year) completedFields++;
    });

    resume.languages?.forEach(lang => {
      totalFields += 2;
      if (lang.name) completedFields++;
      if (lang.progress > 0) completedFields++;
    });

    totalFields += (resume.interests?.length || 0);
    completedFields += (resume.interests?.filter(i => i?.trim() !== "")?.length || 0);

    return Math.round((completedFields / totalFields) * 100);
  };

  const fetchAllresumes = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
      const resumeWithCompletion = response.data.map(resume => ({
        ...resume,
        completion: calculateCompletion(resume)
      }));
      setAllResume(resumeWithCompletion);
    } catch (error) {
      console.error('Error in fetching resumes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllresumes();
  }, []);

  const handleDeleteClick = (id) => {
    setresumeToDelete(id);
    setShowDeleteConfirm(true); // ✅ FIXED: opens the confirmation modal
  };

  const handleDeleteResume = async () => {
    if (!resumeToDelete) return;
    try {
      await axiosInstance.delete(API_PATHS.RESUME.DELETE(resumeToDelete));
      toast.success('Resume deleted');
      fetchAllresumes();
    } catch (error) {
      console.error('Error deleting resume:', error);
      toast.error('Failed to delete resume');
    } finally {
      setresumeToDelete(null);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div>
            <h1 className={styles.headerTitle}>My Resume</h1>
            <p className={styles.headerSubtitle}>
              {allResume.length > 0
                ? `You have ${allResume.length} resume${allResume.length !== 1 ? 's' : ''}`
                : 'You have no resume'}
            </p>
          </div>
          
          {/* <div className="flex gap-4">
            <button
              onClick={() => setOpenCreateModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-bold hover:scale-105 transition-transform shadow-lg"
            >
              <span className="whitespace-nowrap">Create Resume</span>
              <LucideFilePlus className="transition-transform group-hover:translate-x-1" size={18} />
            </button>
          </div>*/}
          <button className={styles.createButton} onClick={() => setOpenCreateModal(true)}>
              <div className={styles.createButtonOverlay}></div>
              <span className={styles.createButtonContent}>
                Create Resume
                <LucideFilePlus className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>

        </div> 

        {loading && (
          <div className={styles.spinnerWrapper}>
            <div className={styles.spinner}></div>
          </div>
        )}

        {!loading && allResume.length === 0 && (
          <div className={styles.emptyStateWrapper}>
            <div className={styles.emptyIconWrapper}>
              <LucideFilePlus size={32} className="text-violet-600" />
            </div>
            <h3 className={styles.emptyTitle}>No Resume</h3>
            <p className={styles.emptyText}>
              You don't have any resumes yet. Click the button below to create one.
            </p>
            <button className={styles.createButton} onClick={() => setOpenCreateModal(true)}>
              <div className={styles.createButtonOverlay}></div>
              <span className={styles.createButtonContent}>
                Build Resume
                <LucideFilePlus className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
          </div>
        )}

        {!loading && allResume.length > 0 && (
          <div className={styles.grid}>
            <div className={styles.newResumeCard} onClick={() => setOpenCreateModal(true)}>
              <div className={styles.newResumeIcon}>
                <LucideFilePlus size={32} className="text-white" />
              </div>
              <h3 className={styles.newResumeTitle}>Your Resumes</h3>
              <p className={styles.newResumeText}>Start building your resume today</p>
            </div>

            {allResume.map((resume) => (
              <ResumeSummaryCard
                key={resume._id}
                imgUrl={resume.thumbnailLink}
                title={resume.title}
                createdAt={resume.createdAt}
                updatedAt={resume.updatedAt}
                onSelect={() => navigate(`/resume/${resume._id}`)}
                onDelete={() => handleDeleteClick(resume._id)} // ✅ FIXED HERE
                completion={resume.completion || 0}
                isPremium={resume.isPremium}
                isNew={dayjs().diff(dayjs(resume.createdAt), 'day') < 7}
              />
            ))}
          </div>
        )}
      </div>

      {/* Create Resume Modal */}
      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
        maxWidth="max-w-2xl"
      >
        <div className="p-6">
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Create New Resume</h3>
            <button onClick={() => setOpenCreateModal(false)} className={styles.modalCloseButton}>
              X
            </button>
          </div>
          <CreateResumeForm
            onSuccess={() => {
              setOpenCreateModal(false);
              fetchAllresumes();
            }}
          />
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        title="Confirm Deletion"
        showActionBtn
        actionBtnText="Delete"
        actionBtnClassName="bg-red-600 hover:bg-red-700"
        onActionClick={handleDeleteResume}
      >
        <div className="p-4">
          <div className="flex flex-col items-center text-center">
            <div className={styles.deleteIconWrapper}>
              <LucideTrash2 className="text-orange-600" size={24} />
            </div>
            <h3 className={styles.deleteTitle}>Delete this resume</h3>
            <p className={styles.deleteText}>Are you sure you want to delete this resume?</p>
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
