namespace ShoesSopAPI.DTO
{
    public class AccountDto
    {
        private int id;
        private string name = default!;
        private string username = default!;
        private string password = default!;
        private string token = default!;

        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
        public string Token { get => token; set => token = value; }
        public string Name { get => name; set => name = value; }
        public int Id { get => id; set => id = value; }
    }
}
