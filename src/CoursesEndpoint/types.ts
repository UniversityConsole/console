export interface Course {
  readonly courseId: string;
  readonly title: string;
  readonly professor: string;
  readonly tags: string[];
  readonly creationTimestamp: Date;
  readonly startDate: string;
  readonly courseMaterials: CourseMaterial[];
  readonly description: string;
}

export interface CreateCourseInput {
  readonly title: string;
  readonly professor: string;
  readonly tags: string[];
  readonly startDate: Date;
  readonly courseMaterials: CourseMaterial[];
  readonly description: string;
}

export interface CreateCourseOutput {
  readonly courseId: string;
}

export enum CourseType {
  Lesson,
  Assignment,
  Lecture,
}
export interface CourseMaterial {
  readonly id: string
  readonly title: string;
  readonly body: string;
  readonly type: CourseType;
  readonly owner: string;
  readonly date: Date;
}

type CreateCourseFn =  (
  input: CreateCourseInput
) => Promise<CreateCourseOutput>;

export interface CourseEndpoint {
  readonly createCourse: CreateCourseFn;
}

export const prettyPrintCourseMaterialType = (input: CourseType) => {
  switch (input) {
    case CourseType.Lesson:
      return 'Lesson';
    case CourseType.Lecture:
      return 'Lecture';
    case CourseType.Assignment:
      return 'Assignment';
  }
}
