import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

class UserRolesForm extends Component {
    render() {
        const { handleSubmit, onCancel, pristine, reset, submitting, roles } = this.props;

        const mappedRoles = roles.map((role, i) => (
            <option key={i} value={role.id}>
                {role.name}
            </option>
        ));

        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">
                        Please select your user type
                    </label>
                    <div className="col-md-9">
                        <Field name="roleId" className="form-control" component="select">
                            <option key={-1} value={null}>
                                -
                            </option>
                            {mappedRoles}
                        </Field>
                    </div>
                </div>
                <button type="reset" className="btn btn-sm btn-danger pull-right" onClick={onCancel}>
                    <i className="fa fa-ban" /> Cancel
                </button>
                <button type="submit" disabled={pristine || submitting} className="btn btn-sm btn-primary pull-right">
                    {submitting && <i className="fa fa-spinner fa-pulse fa-1x fa-fw" />} Save
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'UserRolesForm'
})(UserRolesForm);
