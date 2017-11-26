export const actions = {
  reviewLeftClicked,
  reviewRightClicked,
}

function reviewLeftClicked (state, actions) {
  return (
    {
      reviewStatus: {
        currentReview: state.reviewStatus.currentReview - 1
      }
    }
  )
}

function reviewRightClicked (state, actions) {
  return (
    {
      reviewStatus: {
        currentReview: state.reviewStatus.currentReview + 1
      }
    }
  )
}
