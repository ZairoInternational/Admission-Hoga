export interface CollegeListType {
  id: number;
  collegeName: string;
  logo: string;
}

export interface CollegeExamType {
  id: number;
  exam_name: string;
  full_form: string;
  description: string;
}

export interface WhyChooseUs {
  id: number;
  feature: string;
  description: string;
  logo: string;
}

export interface FAQs {
  title: string;
  content: string;
}
