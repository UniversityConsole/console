import {CreateAccountInput, CreateAccountOutput} from "../AccountsEndpoint/types";

export interface Course {
  readonly courseId: string;
  readonly title: string;
  readonly professor: string;
  readonly tags: string[];
  readonly creationTimestamp: Date;
  readonly startDate: Date;
}

export interface CreateCourseInput {
  readonly title: string;
  readonly professor: string;
  readonly tags: string[];
  readonly startDate: Date;
}

export interface CreateCourseOutput {
  readonly courseId: string;
}

type CreateCourseFn =  (
  input: CreateCourseInput
) => Promise<CreateCourseOutput>;

export interface CourseEndpoint {
  readonly createCourse: CreateCourseFn;
}