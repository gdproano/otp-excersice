import React, {Component} from "react";


class ExerciseForm extends Component {
    render() {
        const {onChange, onSubmit, form} = this.props;
        return (
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="tu titulo"
                            name="title"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="img"
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="leftColor"
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="rightColor"
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary float-right"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }

}
//
// const ExerciseForm = ({onChange, onSubmit, form}) => (
//
//
//     <div className="container">
//         <form onSubmit={onSubmit}>
//             <div className="form-group">
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="tu titulo"
//                     name="title"
//                     onChange={onChange}
//                     value={form.title}
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="description"
//                     name="description"
//                     onChange={onChange}
//                     value={form.description}
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="img"
//                     name="img"
//                     onChange={onChange}
//                     value={form.img}
//                 />
//             </div>
//             <div className="form-row">
//                 <div className="col">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="leftColor"
//                         name="leftColor"
//                         onChange={onChange}
//                         value={form.leftColor}
//                     />
//                 </div>
//                 <div className="col">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="rightColor"
//                         name="rightColor"
//                         onChange={onChange}
//                         value={form.rightColor}
//                     />
//                 </div>
//             </div>
//
//             <button
//                 type="submit"
//                 className="btn btn-primary float-right"
//             >
//                 Submit
//             </button>
//         </form>
//     </div>
// )

export default ExerciseForm;