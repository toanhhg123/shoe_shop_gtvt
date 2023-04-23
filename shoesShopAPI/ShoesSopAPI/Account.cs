namespace ShoesSopAPI
{
    public class Account
    {
        private int id;
        private string name;
        private string username;
        private string password;
        private string token;
        
        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
        public string Token { get => token; set => token = value; }
        public string Name { get => name; set => name = value; }
        public int Id { get => id; set => id = value; }
    }
}
