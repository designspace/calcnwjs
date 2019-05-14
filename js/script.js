$(function() {
	var buffer = '';
	var action = '';
	$('button').click(function() {
		if($(this).data('value') == undefined)
		{
			val = $('#result').text();
			switch ($(this).data('action'))
			{
				case 'C':
					$('#result').text(0);
					buffer = '';
					action = '';
				break;

				case '--':
					if(val != 0)
					{
						if(val.charAt(0) == '-')
						{
							$('#result').text(val.slice(1));
						}
						else
						{
							$('#result').text('-' + val);
						}
					}
				break;

				case '%':
					$('#result').text(val/100);
				break;

				case '/':
					if(buffer == '')
					{
						buffer = val;
						action = '/';
						$('#result').text(0);
					}
					else
					{
						setResult(buffer,action,val);
						buffer = '';
						action = '';
					}
				break;

				case '-':
					if(buffer == '')
					{
						buffer = val;
						action = '-';
						$('#result').text(0);
					}
					else
					{
						setResult(buffer,action,val);
						buffer = '';
						action = '';
					}
				break;

				case '+':
					if(buffer == '')
					{
						buffer = val;
						action = '+';
						$('#result').text(0);
					}
					else
					{
						setResult(buffer,action,val);
						buffer = '';
						action = '';
					}
				break;

				case '*':
					if(buffer == '')
					{
						buffer = val;
						action = '*';
						$('#result').text(0);
					}
					else
					{
						setResult(buffer,action,val);
						buffer = '';
						action = '';
					}
				break;

				case '.':
					if(val.indexOf('.') == -1)
					{
						$('#result').text(val + '.');
					}
				break;

				case '=':
					setResult(buffer,action,val);
					buffer = '';
					action = '';
				break;

			}
		}
		else
		{
			var val = $(this).data('value');
			var result = $('#result').text();
			if(result.length == 10)
			{
				return;
			}
			if(result == '0' && result.indexOf('.') == -1)
			{
				result = '';
			}

			$('#result').text(result+ val);
		}
	});
});

function setResult(buffer,action,val)
{
	if(action != '' && buffer != '' && val != '')
	{
		buffer = +buffer;
		val = +val;
		switch (action)
		{
			case '+':
				$('#result').text(buffer+val);
			break;

			case '-':
				$('#result').text(buffer-val);
			break;

			case '/':
				if(val != 0)
				{
					result = buffer/val;
					$('#result').text(result);
				}
				else
				{
					alert('Нельзя делить на 0');
				}
			break;

			case '*':
				$('#result').text(buffer*val);
			break;
		}
	}
}