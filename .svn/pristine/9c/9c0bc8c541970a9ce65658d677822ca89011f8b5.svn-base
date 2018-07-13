<?PHP
	//16进制ascii码转字符串
	function hexToStr($hex){
	    $string='';
	    for ($i=0; $i < strlen($hex)-1; $i+=2)
	    {
	        $string .= chr(hexdec($hex[$i].$hex[$i+1]));
	    }
	    return $string;
	}

	//字符串转16进制ascii码
	 function strToHex($string){
	    $hex='';
	    for ($i=0; $i < strlen($string); $i++)
	    {
	        $hex .= dechex(ord($string[$i]));
	    }
	    return strtoupper($hex);
	}
?>