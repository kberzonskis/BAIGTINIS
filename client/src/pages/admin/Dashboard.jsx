import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";
import AppleTree from '../../img/th.webp';

export function AdminDasboardPage() {
    const { email } = useContext(UserContext);

    return (
        <main>
            <div className="col-10 col-sm-8 col-lg-6">
                        <img src={AppleTree} className="d-block mx-lg-auto img-fluid border border-warning rounded" alt="Bootstrap Themes"
                            width={700} height={500} loading="lazy" />
                    </div>
            <p>Email: {email}</p>
        </main>
    );
}