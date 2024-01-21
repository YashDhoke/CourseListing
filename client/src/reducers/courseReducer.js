
import {
    FETCH_COURSE_DETAILS_REQUEST,
    FETCH_COURSE_DETAILS_SUCCESS,
    FETCH_COURSE_DETAILS_FAILURE,
    MARK_COURSE_COMPLETED,
  } from '../actions/courseActions';
  
  const initialState = {
    courseDetails: null,
    loading: false,
    error: null,
    completedCourses: [], 
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSE_DETAILS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_COURSE_DETAILS_SUCCESS:
        return { ...state, loading: false, courseDetails: action.payload };
      case FETCH_COURSE_DETAILS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case MARK_COURSE_COMPLETED:
        return { ...state, completedCourses: [...state.completedCourses, action.payload] };
      default:
        return state;
    }
  };
  
  export default courseReducer;
  