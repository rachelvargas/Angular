export class UserService {
    activeUsers = ['Vargas', 'Rachel'];
    inactiveUsers = ['Castro', 'Nicole'];

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);

    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);


    }

}