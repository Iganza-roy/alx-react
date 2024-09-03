import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerStyle = { backgroundColor: '#deb5b545' };
  const rowStyle = { backgroundColor: '#f5f5f5ab' };
  const selectedStyle = isHeader ? headerStyle : rowStyle;

  return (
    <tr style={selectedStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan='2' className={css(styles.thcenter)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  thcenter: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  th: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'left',
  },
  td: {
    paddingLeft: 3,
  },
});

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
