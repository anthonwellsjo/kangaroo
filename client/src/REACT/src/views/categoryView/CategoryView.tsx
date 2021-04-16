import React from 'react';
import useDeslugerize from '../../hooks/useDeslugerize';

interface props {
  match: {
    params: {
      catName: string
    }
  }
}

const CategoryView = (props: props) => {
  return (
    <h1>CategoryView {useDeslugerize(props.match.params.catName)}</h1>
  )
}

export default CategoryView;