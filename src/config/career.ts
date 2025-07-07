// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'George Mason University',
      title: 'Postdoctoral Research Fellow',
      logo: 'college',
      start: '2024',
      end: 'Present'
    },
    {
      company: 'Hawaii Digital Health Lab',
      title: 'Graduate Research Assistant',
      logo: 'college,',
      start: '2023',
      end: '2024'
    },
    {
      company: 'Department of Educational Psychology, University of Hawaii, Manoa',
      title: 'Graduate Research Assistant',
      logo: 'college',
      start: '2022',
      end: '2022'
    },
    {
      company: 'Department of Information and Computer Science, University of Hawaii, Manoa',
      title: 'Graduate Research Assistant',
      logo: 'college',
      start: '2018',
      end: '2023'
    }
  ]