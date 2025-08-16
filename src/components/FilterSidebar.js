import React from 'react';
import './FilterSidebar.css';

function FilterSidebar({ filters, onChange, sortOption, onSortChange, onReset, isOpen }) {
  return (
    <aside className="filter-sidebar">
      <h3>篩選條件</h3>

      <label>
        品牌：
        <select name="brand" value={filters.brand} onChange={onChange}>
          <option value="">全部</option>
          <option value="Tesla">Tesla</option>
          <option value="BMW">BMW</option>
          <option value="Porsche">Porsche</option>
          <option value="Abarth">Abarth</option>
          <option value="Mini">Mini</option>
          <option value="Mercedes">Mercedes</option>
        </select>
      </label>

      <label>
        排序方式：
        <select value={sortOption} onChange={onSortChange}>
          <option value="">預設</option>
          <option value="price-asc">價格：由低至高</option>
          <option value="price-desc">價格：由高至低</option>
          <option value="year-asc">年份：由舊至新</option>
          <option value="year-desc">年份：由新至舊</option>
        </select>
      </label>

      <label>
        價格上限 (HK$)：
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={onChange}
        />
      </label>

      <label>
        最早年份：
        <input
          type="number"
          name="minYear"
          value={filters.minYear}
          onChange={onChange}
        />
      </label>

      <button className="reset-button" onClick={onReset}>重設篩選條件</button>
    </aside>
  );
}

export default FilterSidebar;













