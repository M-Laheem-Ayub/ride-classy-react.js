import React from 'react'
import PropTypes from 'prop-types'

const PageTitle = ({ pageTitle }) => {
  return (
    <div className="text-start mt-6 px-2.5 md:px-9">
      <h2 className="md:text-[32px] text-3xl font-roboto font-semibold pt-14  pb-3">
        {pageTitle}
      </h2>
      <hr className=" w-full mx-auto border-t-1 border-gray-300 mb-10" />
    </div>
  )
}

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default PageTitle
