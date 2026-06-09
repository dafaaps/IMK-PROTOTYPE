$content = Get-Content index.html -Raw
$content = $content -replace 'class="screen bg-dark fixed inset-0 z-\[100\]', 'class="screen bg-dark fixed inset-0 md:left-64 z-[100]'
$content = $content -replace '<div class="px-5 pt-12 pb-6 fade-in h-full flex flex-col">', '<div class="px-5 pt-12 pb-6 fade-in h-full flex flex-col md:px-10 md:pt-16 md:max-w-2xl mx-auto w-full">'
$content = $content -replace '<div class="px-5 pt-12 pb-6 fade-in h-full flex flex-col items-center justify-center">', '<div class="px-5 pt-12 pb-6 fade-in h-full flex flex-col items-center justify-center md:px-10 md:pt-16 md:max-w-2xl mx-auto w-full">'
Set-Content index.html -Value $content
