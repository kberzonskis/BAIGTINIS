import { Link } from 'react-router';

export function AdminFoodsTable() {
return (
<div className="container mt-5">
    <div className="row">
        <div className="col-12">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Thumbnail</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Foods</th>
                            <th scope="col">Status</th>
                            <th scope ="col">Edit/Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src="/img/default.png" alt="Movie thumbnail" style={{ maxHeight: '4rem' }} /></td>
                            <td>
                                <Link to="/admin/products/qwe">qwe</Link>
                            </td>
                            <td><span className="badge text-bg-success">Provided</span></td>
                            <td></td>

                            <td><span className="badge text-bg-warning">Draft</span></td>
                            <td>
                                <div className="d-flex gap-3">
                                    <Link className="btn btn-primary btn-sm" to="/admin/products/qwe/edit">Edit</Link>
                                    <button data-url="qwe" className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="row">2</th>
                            <td><img src="/img/movies/movie-1753166114584-540007.jpg" alt="Movie thumbnail"
                                    style={{ maxHeight: '4rem' }} /></td>
                            <td>
                                <Link to="/admin/products/asd">asd</Link>
                            </td>
                            <td><span className="badge text-bg-success">Provided</span></td>
                            <td>description</td>

                            <td><span className="badge text-bg-success">Published</span></td>
                            <td>
                                <div className="d-flex gap-3">
                                    <Link className="btn btn-primary btn-sm" to="/admin/products/asd/edit">Edit</Link>
                                    <button data-url="asd" className="btn btn-danger btn-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
);
}