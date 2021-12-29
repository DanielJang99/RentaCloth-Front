import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import commons from "@styles/commons/Commons.module.css";
import api from "@src/_axios";
import { getFormattedDate } from "@src/utils/date";
import { useRouter } from "next/router";

function Admin() {
    const router = useRouter();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const resp = await api.get("/users/rents");
            resp.status === 201 ? setUsers(resp.data) : router.push("/");
        };
        fetchUsers();
    }, []);

    const handleClick = (user_id) => {
        return router.push(`/admin/user/${user_id}`);
    };

    return (
        <div className={commons.page_container}>
            <div>총 회원: {users.length}명</div>
            <Table
                sx={{ minWidth: "50%", maxWidth: 430 }}
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>이름</TableCell>
                        <TableCell>연락처</TableCell>
                        <TableCell>이메일</TableCell>
                        <TableCell>주문</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.name}>
                            <TableCell component="th" scope="row">
                                {user.name}
                            </TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell
                                sx={{
                                    color: "blue",
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleClick(user._id)}
                            >
                                {user.rents.length}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default Admin;
