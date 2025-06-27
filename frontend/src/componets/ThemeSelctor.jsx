import React, { useRef, useState } from 'react'
import {DUMMY_RESUME_DATA, resumeTemplates} from '../utils/data'
import { Check } from 'lucide-react'
import { TemplateCard } from './Cards'

const TAB_DATA = [{label : 'Templates'}]
const ThemeSelctor = ({selectedTheme,setselectedTheme,resumeData,onClose}) => {
    const resumeRef = useRef(null)
    const [basewidth,setBasewidth] = useState(800)


    const intialIndex = resumeTemplates.findIndex(t => t.id == selectedTheme)
    const [selectedTemplate, setselectedTemplate] = useState({
        theme : selectedTheme || resumeTemplates[0]?.id || "" ,  
        index : intialIndex  >= 0 ? intialIndex : 0 ,

    })
    const [tabValue,setTabValue] = useState('Templates')

    const handleThemeSelection = () =>
        {
            setselectedTheme(selectedTemplate.theme)
            onClose()
        }
    const updateBaseWidth = () =>
        {
            if(resumeRef.current)
            {
                setBasewidth(resumeRef.current.offsetWidth)
            }
        }

    useEffect(() => {
      updateBaseWidth();

      window.addEventListener("resize", updateBaseWidth);

      return () => {
        window.removeEventListener("resize", updateBaseWidth);
      };
    }, []);




  return (
  <div className='max-w-7xl mx-auto px-4'>
    {/* header */}
    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 p-4 sm:p-6 bg-gradient-to-r from-white to-violet-50 rounded-2xl border border-violet-100'>
      <Tabs 
        tabs={TAB_DATA} 
        activeTab={tabValue} 
        setActiveTab={setActiveTab} 
      />

      <button
        className='w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-xl'
        onClick={handleThemeSelection}
      >
        <Check size={18}></Check>
        Apply Theme
      </button>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8'>
  <div className='lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] lg:max-h-[70vh] overflow-auto p-2'>
      {resumeTemplates.map((template, index) => (
        <TemplateCard
            key={`template_${index}`}
            thumbnailImg={template.thumbnailImg}
            isSelected={selectedTemplate.index === index}
            onSelect={() =>
            setselectedTemplate({
                theme: template.id,
                index,
            })
            }
        />
        ))}

        </div>
        </div>
        {/*right*/}
        <div className='lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-4 sm:p-6'>
            <RenderResume templateId ={selectedTemplate?.theme || ""}
            resumeData = {resumeData || DUMMY_RESUME_DATA} containerWidth={basewidth} />
        </div>
        
        
    </div>

  </div>
);

}

export default ThemeSelctor