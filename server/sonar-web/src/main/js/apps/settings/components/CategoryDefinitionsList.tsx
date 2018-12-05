/*
 * SonarQube
 * Copyright (C) 2009-2018 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { connect } from 'react-redux';
import SubCategoryDefinitionsList from './SubCategoryDefinitionsList';
import { fetchValues } from '../store/actions';
import { getSettingsAppSettingsForCategory, Store } from '../../../store/rootReducer';
import { Component } from '../../../app/types';

interface Props {
  category: string;
  component?: Component;
}

const mapStateToProps = (state: Store, ownProps: Props) => ({
  settings: getSettingsAppSettingsForCategory(
    state,
    ownProps.category,
    ownProps.component && ownProps.component.key
  )
});

const mapDispatchToProps = { fetchValues };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubCategoryDefinitionsList);