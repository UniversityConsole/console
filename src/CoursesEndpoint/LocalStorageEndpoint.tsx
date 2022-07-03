import {Course, CourseEndpoint, CreateCourseInput, CreateCourseOutput} from "./types";
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

export const LocalStorageEndpoint: CourseEndpoint = {
  createCourse({title, professor, tags, startDate}: CreateCourseInput) : Promise<CreateCourseOutput> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const courseId = self.crypto.randomUUID();
        const courseKey = `uc/course/${courseId}`;

        const options: DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const startDateFormatted: string = startDate.toLocaleDateString('en-US', options);

        window.localStorage.setItem(
          courseKey,
          JSON.stringify({
            courseId,
            title,
            professor,
            tags,
            startDate: startDateFormatted
          })
        );

        resolve({courseId});
      }, 500)
    });
  },
}