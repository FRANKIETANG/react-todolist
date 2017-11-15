import React from 'react'

export default function (props) {
    return (
        <form className="signUp"
            onSubmit={props.onSubmit.bind(this)}>
            <div className="row">
                <input type="text"
                    placeholder="邮箱"
                    value={props.formData.email}
                    onChange={props.onChange.bind(null, 'email')} />
            </div>
            <div className="row">
                <input type="text"
                    placeholder="用户名"
                    value={props.formData.username}
                    onChange={props.onChange.bind(null, 'username')} />
            </div>
            <div className="row">
                <input type="password"
                    placeholder="密码"
                    value={props.formData.password}
                    onChange={props.onChange.bind(null, 'password')} />
            </div>
            <div className="row actions">
                <button type="submit">注册</button>
            </div>
        </form>
    )
}