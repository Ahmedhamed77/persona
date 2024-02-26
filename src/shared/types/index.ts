export type Question = {
  id: number;
  text: string;
  options: QuestionOption[];
};

export type QuestionOption = {
  value: string;
  content: string;
  introvertPoint: number;
  extrovertPoint: number;
};
