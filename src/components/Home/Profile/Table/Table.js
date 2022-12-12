import React from 'react';

const Table = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Reason</th>
                            <th>Coins Earned</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr className='hover'>
                            <th>2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <th>3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;