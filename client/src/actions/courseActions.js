
export const FETCH_COURSE_DETAILS_REQUEST = 'FETCH_COURSE_DETAILS_REQUEST';
export const FETCH_COURSE_DETAILS_SUCCESS = 'FETCH_COURSE_DETAILS_SUCCESS';
export const FETCH_COURSE_DETAILS_FAILURE = 'FETCH_COURSE_DETAILS_FAILURE';
export const MARK_COURSE_COMPLETED = 'MARK_COURSE_COMPLETED';

const fetchCourseDetailsRequest = () => ({ type: FETCH_COURSE_DETAILS_REQUEST });
const fetchCourseDetailsSuccess = (courseDetails) => ({ type: FETCH_COURSE_DETAILS_SUCCESS, payload: courseDetails });
const fetchCourseDetailsFailure = (error) => ({ type: FETCH_COURSE_DETAILS_FAILURE, payload: error });
export const markCourseAsCompleted = (courseId) => ({ type: MARK_COURSE_COMPLETED, payload: courseId });

export const fetchCourseDetails = (courseId) => {
  return async (dispatch) => {
    dispatch(fetchCourseDetailsRequest());
    try {
      // Replace with your actual API call
      const response = await fetch(`https://your-api.com/courses/${courseId}`);
      const data = await response.json();
      dispatch(fetchCourseDetailsSuccess(data));
    } catch (error) {
      dispatch(fetchCourseDetailsFailure(error.message));
    }
  };
};
