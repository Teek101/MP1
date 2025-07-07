
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'University of Hawaii at Manoa',
      major: 'Ph.D. in Communication and Information Sciences',
      logo: 'college',
      start: '2018',
      end: '2024'
    },
  ]