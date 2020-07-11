flag_sync=$1

for FN in `ls new`; do
	echo diff new/$FN original/$FN
	if ! diff new/$FN original/$FN; then
		if [ -n "$flag_sync" ]; then
			cp -v new/$FN original/$FN
		else
			echo not copying cp new/$FN original/$FN
		fi
	fi
done
