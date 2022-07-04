export interface Course {
  readonly courseId: string;
  readonly title: string;
  readonly professor: string;
  readonly tags: string[];
  readonly creationTimestamp: Date;
  readonly startDate: Date;
  readonly courseMaterials: CourseMaterial[];
}

export interface CreateCourseInput {
  readonly title: string;
  readonly professor: string;
  readonly tags: string[];
  readonly startDate: Date;
  readonly courseMaterials: CourseMaterial[];
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
}

type CreateCourseFn =  (
  input: CreateCourseInput
) => Promise<CreateCourseOutput>;

export interface CourseEndpoint {
  readonly createCourse: CreateCourseFn;
}