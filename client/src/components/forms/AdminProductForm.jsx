export function AdminProductForm() {
    return (
        <form className="col-12 col-md-9 col-lg-6">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" required="" />
            </div>
            <div className="mb-3">
                <label htmlFor="url" className="form-label">Url slug</label>
                <input type="text" className="form-control" id="url" required="" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description"></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Status</label>
                <div className="form-check">
                    <input type="radio" name="radios" className="form-check-input" id="status_published"  checked="" required="" />
                    <label className="form-check-label" htmlFor="status_published">Published</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="radios" className="form-check-input" id="status_InProgress" checked=""  required="" />
                    <label className="form-check-label" htmlFor="status_inProgres">InProgress</label>
                </div>
            </div>
            <button type="submit" className="btn btn-warning me-2 w-50 py-2 fs-5">Create</button>
        </form>
    );
}