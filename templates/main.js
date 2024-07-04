// Gửi yêu cầu AJAX để tìm kiếm điểm dừng xe buýt
  document.getElementById('search-form').addEventListener('submit', function(event) {
            event.preventDefault();
        var query = document.getElementById('search-input').value;
                var url = `https://hypnguyen.me/chatbot/SearchBusStop.php?q=${query}`;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        var results = document.getElementById('results');
                        results.innerHTML = '';
                        if (data.results.length > 0) {
                            data.results.forEach(bus_stop => {
                                var li = document.createElement('li');
                                li.textContent = `${bus_stop.name} (${bus_stop.address})`;
                                results.appendChild(li);
                            });
                        } else {
                            var li = document.createElement('li');
                            li.textContent = 'Không tìm thấy kết quả.';
                            results.appendChild(li);
                        }
                    })
                    .catch(error => console.error(error));
            });