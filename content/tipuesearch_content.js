var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 倉儲連結: https://github.com/nfu40923208/cp2020 \n 倉儲作業歷史: https://github.com/nfu40923208/cp2020/commits/main \n \n', 'tags': '', 'url': 'About.html'}, {'title': '每週進度', 'text': '\n', 'tags': '', 'url': '每週進度.html'}, {'title': 'W1', 'text': '\xa0 \xa0 \xa0 \xa0 \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': 'from random import shuffle list = [40623219, 40723154, 40828127, 40923101, 40923102, 40923103, 40923104, 40923105, 40923106, 40923107, 40923108, 40923109, 40923110, 40923111, 40923113, 40923114, 40923115, 40923116, 40923117, 40923118, 40923119, 40923120, 40923121, 40923122, 40923123, 40923124, 40923125, 40923126, 40923127, 40923128, 40923129, 40923130, 40923131, 40923133, 40923134, 40923135, 40923136, 40923137, 40923138, 40923139, 40923140, 40923141, 40923142, 40923143, 40923144, 40923145, 40923146, 40923147, 40923148, 40923149, 40923150, 40923151, 40923152, 40923153] shuffle(list) step = 11 b = [list[i:i+step] for i in range(0,len(list),step)] print(b) \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': 'HW1', 'text': 'PCH8: Cooling \n Heat Sources \n Overview\xa0 總覽 \n This module will discuss sources of heat and its effects, along with various ways to cool the CPU and system. \n 本模塊將討論熱源及其影響，以及冷卻CPU和系統的各種方法。\xa0\xa0 \n Heat Sources\xa0 熱源\xa0 \xa0 \n Heat is generated through thermal radiation as a by-product of electromagnetic movement within the circuits of our computers. The heat is caused by the internal resistance that the electricity encounters as it flows throughout the computer, and this resistance creates enough heat that the computer often becomes very, very hot inside the case. Each component of the computer creates heat at a different rate, depending on the specific operations being performed. For example, the CPU generates the most heat, since it does the greatest number of computations and uses a large amount of electricity. Another common source of heat is the graphics processing unit (GPU), which does an enormous amount of processing when performing calculations required to support 3D graphics, such as those used in video gaming. Often, during gaming, the GPU will actually create more heat than the CPU. \n Other sources of heat include the hard disk and the optical disc drive, as the spinning of the disks during the read/write cycle can generate heat from both friction and electricity. Another component of the computer that generates an enormous amount of heat is the PSU, as it transforms AC power into DC power. Because it is such a large heat source, the power supply usually has its own dedicated cooling fan. \n Another potential source of heat is the room in which the computer is located. If you are working in a room with a high room temperature, such as 80 degrees Fahrenheit (27 degrees Celsius), the computer has to remove additional internal heat from the machine due to the environmental conditions of the room. \n 熱量是通過熱輻射產生的，這些熱量是我們計算機電路內部電磁運動的副產品。熱量是由電流在整個計算機中流動時遇到的內部電阻引起的，並且該電阻產生的熱量足以使計算機在機殼內部變得非常非常熱。根據所執行的特定操作，計算機的每個組件以不同的速率產生熱量。例如，CPU產生的熱量最多，因為它進行了大量的計算並消耗大量電能。另一個常見的熱量來源是圖形處理單元（GPU），當執行支持3D圖形（例如視頻遊戲中使用的圖形）所需的計算時，它將進行大量處理。通常，在遊戲過程中 \n 其他熱源包括硬盤和光盤驅動器，因為在讀/寫週期中磁盤的旋轉會因摩擦和電而產生熱量。 產生大量熱量的計算機的另一個組件是PSU，它可以將交流電轉換為直流電。 由於電源如此之大，因此電源通常具有自己的專用冷卻風扇。 \n 另一個潛在的熱源是計算機所在的房間。 如果您在室溫較高的房間（例如華氏80度（27攝氏度））中工作，由於房間的環境條件，計算機必須從機器中清除其他內部熱量。 \n Heat Effects\xa0 熱效應 \n If the computer is unable to remove the heat created by the internal components or environmental heat, the BIOS of the computer may instruct intensive applications to slow down, thereby reducing the processing capability of the CPU and minimizing its heat output. Additionally, the BIOS may actually instruct various components to shut down in order to avoid overheating and possible damage to the components. This can cause the entire system to shut down without warning and can occur routinely unless a more efficient cooling system, such as a larger, more efficient fan, is outfitted into the computer. A system shutdown is rather commonplace in machines where overclocking has been performed, or in systems where a cooling fan has become damaged. \n Often there is no indication to the end user that an overheating condition is occurring, but even this can have severe consequences. Hard disk drives, CPUs, and GPUs are all sensitive to temperature changes. Hard drives in particular can become irreparably damaged by temperature changes due to the expansion and contraction of device components. This can cause read/write errors, or even a complete failure of the disk drive. \n 如果計算機無法消除內部組件產生的熱量或環境熱量，則計算機的BIOS可能會指示密集型應用程序放慢速度，從而降低CPU的處理能力並最小化其熱量輸出。此外，BIOS實際上可以指示各種組件關閉，以避免過熱和對組件的可能損壞。這可能會導致整個系統無預警地關閉，並且可能會常規發生，除非計算機中裝有更高效的冷卻系統（例如更大，更高效的風扇）。在執行超頻的機器中或在冷卻風扇已損壞的系統中，系統關閉非常普遍。 \n 通常，最終用戶沒有跡象表明發生了過熱情況，但即使這樣也會造成嚴重後果。 硬盤驅動器，CPU和GPU都對溫度變化敏感。 由於設備組件的膨脹和收縮，特別是硬盤驅動器會因溫度變化而造成不可挽回的損害。 這可能導致讀/寫錯誤，甚至導致磁盤驅動器完全故障。 \n Heat Reduction\xa0 減少熱量 \n There are many ways to reduce the amount of heat generated in a computer, but the most notable way is the use of a heat sink, like the one pictured below in green. A heat sink works to draw heat away from the sensitive components, such as the CPU, GPU, northbridge, and southbridge, through conduction. It then uses the fins to dissipate heat across a wider surface area. A fan usually moves air over the surface to remove the heat from the heat sink and push it out the computer’s exhaust vents on the back of the system. Heat sinks are created out of aluminum alloys or copper, which are soft metals with high heat conductivity. \n Modern PCs can create a great deal of heat and require the use of both a heat sink and a cooling fan to aid in airflow and reduce the effect of heat on the nearby components. Case design is important to create good air flow through the case. Just like opening the windows and doors of a house can create a straight-through wind tunnel effect, cases are built to maximize airflow. Also, cables inside the case should be bundled and tucked out of the way to increase airflow and maximize cooling. \n 有許多方法可以減少計算機中產生的熱量，但是最顯著的方法是使用散熱器，如下面的綠色圖片所示。 散熱器通過傳導將熱量從敏感組件（例如CPU，GPU，北橋和南橋）吸走。 然後，它使用散熱片在更寬的表面積上散熱。 風扇通常在表面上移動空氣，以從散熱器中散熱，然後將其從系統背面的計算機排氣孔中推出。 散熱器由鋁合金或銅製成，而鋁合金或銅是具有高導熱性的軟金屬。 \n 現代PC會產生大量熱量，並且需要同時使用散熱器和冷卻風扇來幫助氣流並減少熱量對附近組件的影響。 機箱設計對於在機箱中產生良好的氣流很重要。 就像打開房屋的門窗可以產生直通的風洞效果一樣，箱體也可以最大化氣流。 另外，應捆紮和捆紮外殼內的電纜，以增加氣流並最大程度地冷卻。 \n \n BIOS Settings \n Most modern motherboards and BIOS support temperature monitoring and control for the motherboard and its components. The name for this varies depending on manufacturer, but often it is called PC health or temperature monitoring. For motherboards that support overclocking, you can configure the settings in the BIOS to increase or decrease your processing capability, and thereby prevent additional heat from being generated. The CPU has a sensor that monitors its temperature, and the BIOS can increase or decrease the fan speed to control the temperature of the CPU. Remember, though, by reducing the power consumption (and therefore heat), you are also simultaneously reducing the performance of the CPU. \n 大多數現代主板和BIOS支持對主板及其組件進行溫度監控。 其名稱因製造商而異，但通常稱為PC運行狀況或溫度監控。 對於支持超頻的主板，您可以在BIOS中配置設置以增加或減少處理能力，從而防止產生更多的熱量。 CPU具有監視其溫度的傳感器，BIOS可以增加或減小風扇速度以控制CPU的溫度。 但是請記住，通過減少功耗（並因此減少熱量），您同時也在降低CPU的性能。 \n \n Cooling Methods \n Over the decades, various cooling methods have been introduced, with each one having its own advantages and disadvantages. \n 幾十年來，已經引入了各種冷卻方法，每種方法都有其自身的優點和缺點。 \n Active Air Cooling\xa0 主動風冷 \n Active air cooling components consist of a fan and a cooling plate (heat sink) made of aluminum or copper. A fan blows fresh air on a heat sink placed over the components that need to be cooled. The heat sink’s fins increase the surface of the metal plate and increase the heat exchange capabilities of the component. The fan blows the air between those fins, making the heat exchange quicker and more efficient, as it rapidly removes the heated air that is produced between the fins. There is only one drawback to active air cooling: the component that generates heat can never be cooled below the ambient room temperature. This is because active cooling uses forced air from the room, and the room air cannot cool a component to a lower temperature than the ambient temperature. These components are very reliable, and the cost of this system is quite affordable. \n 主動空氣冷卻組件由風扇和鋁或銅製成的冷卻板（散熱器）組成。 風扇將新鮮空氣吹到放置在需要冷卻的組件上方的散熱器上。 散熱器的散熱片增加了金屬板的表面，並增加了組件的熱交換能力。 風扇在這些散熱片之間吹動空氣，從而使熱交換更快，更有效，因為它可以快速去除散熱片之間產生的熱空氣。 主動空氣冷卻只有一個缺點：產生熱量的組件永遠無法冷卻到室溫以下。 這是因為主動冷卻使用來自房間的強制空氣，並且房間空氣無法將組件冷卻到比環境溫度低的溫度。 這些組件非常可靠， \n Passive Air Cooling\xa0 被動風冷 \n Similar to the active air cooling method, passive air cooling uses a heat sink to create a larger cooling surface of a component. The difference lies in the size of the heat sink, though, since passive air cooling relies solely on the size of the fins to reduce the heat. These fins must be large enough and must also have enough space between them so that a natural flow of air can be achieved that will adequately remove the heat. These heat sinks can become quite heavy and require special parts to be fixed over the part to be cooled. Passive air cooling is the most efficient way of cooling in terms of power saving, since it uses no power to operate. The drawback to this method is weight, since heavy and large heat sinks must be fixed over small parts, increasing the total weight of a computer and reducing the usable area inside the case. Additionally, this method doesn’t work well when the ambient temperature is high, because high ambient temperature causes the passive air cooling to become ineffective. \n 類似於主動空氣冷卻方法，被動空氣冷卻使用散熱器來創建較大的組件冷卻表面。 不過，區別在於散熱器的大小，因為被動空氣冷卻僅依賴散熱片的大小來減少熱量。 這些散熱片必須足夠大，並且它們之間還必須具有足夠的空間，以便可以實現自然的空氣流動，從而充分散熱。 這些散熱器會變得很重，需要將特殊零件固定在要冷卻的零件上。 就省電而言，被動式空氣冷卻是最有效的冷卻方式，因為它不使用任何電源進行操作。 這種方法的缺點是重量大，因為必須將重型散熱器和大型散熱器固定在較小的零件上，這會增加計算機的總重量並減小機箱內部的可用面積。 \n Liquid Cooling\xa0 液體冷卻 \n Modern CPUs generate twice as much heat as CPUs did five years ago. This is even truer for the GPUs. For example, a powerful dual-processor graphics card can generate as much as 380 watts of heat. Many contemporary machines use multiple processors and graphics cards, making the efficient cooling of these components a priority. Removing such vast amounts of heat in a space-constrained environment such as a computer chassis is traditionally done at the cost of an uncomfortably high noise level from the fan. Liquid cooling minimizes the noise level required. Liquid cooling is also the best solution for rapid heat removal due to the high thermal output of the GPUs and CPUs in gaming systems and high performance computers respectively. A water block normally offers a lower profile cooling solution and it allows double computational power in the same cubic footprint. The liquid cooling system dramatically lowers the operational temperatures and increases the ability to overclock CPUs to higher levels without damage. \n Liquid cooling takes advantage of a basic principle of thermodynamics — that heat moves from warmer objects to cooler objects. As the cooler object gets warmer, the warmer object gets cooler. The sole purpose is to transfer heat (energy) away from critical computer components quickly and effectively. The heat is usually transferred to the surrounding environment by dissipating the heat through the heat sink and radiators. Water has a high level of thermal conductivity, meaning it absorbs heat better than air. Liquid cooling works by running water through the channels in the water block attached to each of the components that require cooling, transferring heat from each part to a radiator that dissipates the heat and keeps the water cool — similar to a car\'s radiator. This lets the processor, graphics card, and other hardware cool down much more effectively. \n Liquid cooling allows the transfer of more heat from the components being cooled than air, making liquid cooling perfect for overclocking and high-performance computer applications. In comparison to air cooling, liquid cooling is not influenced by the ambient temperature, making it a better choice in environments with a high ambient heat. Also, liquid cooling has a relatively low noise level because it uses much quieter and smaller fans than those used in active cooling. \n The major drawbacks of liquid cooling are complexity and cost. Also, liquid cooling can be messy and cause damage when a failure in pipe connections occurs. Liquid cooling also needs a good deal of power to operate the pump. Despite some of these drawbacks, liquid cooling is still popular with gamers because of its efficiency and effectiveness. \n In a liquid cooled system, each component that requires cooling has a cooling plate (heat sink) attached to it. This heat sink, usually made of copper or aluminum, is a hollow plate with an input and an output hose through which the coolant will flow. The circulating pump will circulate the coolant from the radiator to the cooling plates, then to the tank and back to the radiator, where the heat is dissipated. \n Here are more details about each component: \n Radiator : The radiator moves the absorbed heat into the surrounding environment by using a cooling fan to effectively cool the liquid. The bigger the radiator, the more effective it becomes, which results in lower liquid temperature and a lower component temperature. \n Water block : The water block (or heat sink) absorbs the heat from the microprocessor. It contains microfins that are used to boost the surface area for more optimal heat transfer. As the liquid flows through the water block, it absorbs the heat. If you have a more efficient water block, your overall component temperature will decrease. \n Water pump : The water pump provides the circulation of the liquid in the cooling loop from the hot side to the cold side. This allows for effective heat transfer throughout the entire loop. Without a good water pump, the liquid would stagnate in the loop and heat transfer would not occur. \n Reservoir : The reservoir unit allows for easier removal of air after the initial liquid cooling installation and serves as an expansion area for the coolant during temperature fluctuations. \n 現代CPU產生的熱量是五年前的兩倍。對於GPU來說更是如此。例如，功能強大的雙處理器圖形卡可以產生多達380瓦的熱量。許多現代機器使用多個處理器和圖形卡，因此優先考慮有效冷卻這些組件。傳統上，在空間受限的環境（例如計算機機箱）中清除如此大量的熱量，是要付出代價的，否則風扇會產生令人不快的高噪音水平。液體冷卻可將所需的噪音降至最低。由於分別在遊戲系統和高性能計算機中的GPU和CPU的高熱量輸出，液體冷卻也是快速散熱的最佳解決方案。水冷塊通常提供較低輪廓的冷卻解決方案，並且在相同的立方尺寸內可以實現雙倍的計算能力。液體冷卻系統顯著降低了工作溫度，並增強了將CPU超頻到更高水平而不會造成損壞的能力。 \n 液體冷卻利用了熱力學的基本原理，即熱量從較熱的物體轉移到較冷的物體。 隨著較冷的物體變熱，較熱的物體變冷。 唯一的目的是快速有效地將熱量（能量）從關鍵計算機組件中轉移出去。 通常通過通過散熱器和散熱器散發熱量，將熱量傳遞到周圍環境。 水的導熱係數很高，這意味著它比空氣吸收的熱量更好。 液體冷卻的工作原理是使水流過連接到需要冷卻的每個組件的水冷塊中的通道，將熱量從每個零件傳遞到散熱器，該散熱器散發熱量並使水保持涼爽，類似於汽車的散熱器。 這樣，處理器，圖形卡， \n 液體冷卻使被冷卻的組件比空氣傳遞更多的熱量，使液體冷卻非常適合超頻和高性能計算機應用。 與空氣冷卻相比，液體冷卻不受環境溫度的影響，因此使其在環境熱量較高的環境中成為更好的選擇。 而且，液體冷卻的噪音水平相對較低，因為與主動冷卻相比，液體冷卻使用的風扇更安靜，更小。 \n 液體冷卻的主要缺點是複雜性和成本。 同樣，當管道連接發生故障時，液體冷卻可能會造成混亂，並造成損壞。 液體冷卻還需要大量功率才能操作泵。 儘管存在這些缺點，但液體冷卻由於其效率和有效性而仍然受到遊戲玩家的歡迎。 \n 在液冷系統中，需要冷卻的每個組件都有一個連接的冷卻板（散熱器）。 該散熱器通常由銅或鋁製成，是一個帶有輸入和輸出軟管的中空板，冷卻液將流過該軟管。 循環泵將使冷卻劑從散熱器循環到冷卻板，然後再到水箱，再回到散熱器，在那兒散熱。 \n 以下是有關每個組件的更多詳細信息： \n 散熱器 ：散熱器通過使用冷卻風扇有效地冷卻液體，將吸收的熱量轉移到周圍環境中。 散熱器越大，散熱器越有效，從而導致較低的液體溫度和較低的組件溫度。 \n 水塊 ：水塊（或散熱器）從微處理器吸收熱量。 它包含微翅片，這些微翅片用於增加表面積以實現更佳的熱傳遞。 當液體流過水塊時，它吸收熱量。 如果您使用更有效的阻水劑，則組件的整體溫度將會降低。 \n 水泵 ：水泵提供冷卻迴路中從熱側到冷側的液體循環。 這允許在整個迴路中進行有效的熱傳遞。 沒有良好的水泵，液體將滯留在迴路中，並且不會發生熱傳遞。 \n 儲 ：儲存器單元允許初始液體冷卻安裝後容易除去空氣，並作為在溫度波動的冷卻的膨脹區域。 \n \n CPU Cooling \n In the lab below, you should install a new CPU. For the purpose of this lab, we have removed the computer\'s case for you. You will also need to apply thermal paste, install the heat sink and install the cooling fan. For the purposes of this lab exercise, you can assume that ESD precautions are in place. \n For maintenance, it is important to clear the fan blades and heat sink of dust at least every six months. This is a quick and easy maintenance task. Blowing compressed air into the fan blades and across the heat sink fins will keep the cooling system running smoothly. \n 在下面的實驗室中，您應該安裝一個新的CPU。 為了本實驗的目的，我們為您卸下了計算機機箱。 您還需要塗導熱膏，安裝散熱器和安裝冷卻風扇。 就本練習而言，您可以假定已採取ESD預防措施。 \n 對於維護，重要的是至少每六個月清潔一次風扇葉片和散熱器的灰塵。 這是一項快速簡便的維護任務。 將壓縮空氣吹入風扇葉片並穿過散熱片將使冷卻系統保持平穩運行。 \n Case Fans\xa0 機箱風扇 \n Case fans are necessary to remove all the hot air generated by computer components, especially video cards and CPUs. The hot air has to be vented out and replaced by cooler air. Cool air can usually be found closer to the ground, since heat tends to rise, so most cases are designed so that cooler air is pulled into the system at the bottom by the front case fan. Air is then exhausted out the rear-top of the case near the CPU as well as out of the side of the case near the graphics processing unit. \n 機箱風扇對於消除計算機組件（尤其是視頻卡和CPU）產生的所有熱空氣是必不可少的。 必須排出熱空氣，並用涼爽的空氣代替。 通常會發現較冷的空氣更靠近地面，因為熱量會增加，因此大多數情況下都設計成使較冷的空氣被前殼風扇從底部吸入系統。 然後，空氣從CPU附近的機箱後部以及圖形處理單元附近的機箱側面排出。 \n EXAMPLE \n Here is a common case fan setup: \n 1x fan in the bottom-front of the case, near the drive bays (intake). \n 1x fan in the rear-top of the case, "behind" and above the CPU (exhaust). \n 1x fan in the side of the case, across from the GPU (intake). \n This setup pulls air in through the front, channels it through the drive bays, around the video card, and out the exhaust fan. The side fan forces air directly onto the hottest component (the GPU), and is then pushed up by the front fan and channeled out of the rear exhaust fan. \n 這是一個常見的風扇設置： \n 機箱底部前部靠近驅動器托架（進氣口）的1個風扇。 \n 機箱後部頂部，CPU上方（排氣口之後）和上方的1個風扇。 \n 機箱側面有1個風扇，與GPU相對（進氣）。 \n 此設置將空氣從前部吸入，通過驅動器托架將其引導到視頻卡周圍，然後從排氣風扇中排出。 側風扇將空氣直接壓到最熱的組件（GPU）上，然後由前風扇向上推動，並從後部排氣風扇中導出。 \n \n Case Fans: Installation \n The following steps will enable you to install a case fan. First, you must ensure that your PC is powered off before you install any component in your system. After opening the case, you will need a Phillips head screwdriver in order to remove/install case fans. If you’re replacing a fan, simply remove the old one by unscrewing it from the case and unplugging the cable from the header (or the MOLEX connection, if you have an older system). To mount the new fan, hold the fan up to the mounting position so that the holes for screws line up with the holes in the case. While holding the fan in place with one hand, with your other hand use four screws to secure it in place. Some models use plastic friction clips to hold the fan in place instead of screws. If the system is like this, simply un-snap the clips, remove the fan, and pop the new one in its place. \n After you secure the fan, you need to attach the fan to an unused fan header to provide the fan with power. The headers are keyed to ensure a proper connection and prevent you from plugging them in backwards. Four-pin headers will work with three-pin fans, but you will not be able to control fan speeds, since this is only performed by the fourth pin in the connector. \n When you are done installing the fan, make sure you route your fan and other cables using proper cable management techniques and some zip-ties. Proper cable management prevents the fans from hitting the cables when they spin and also aids in proper airflow to increase cooling efficiency. Be sure to power up the computer and make sure the fan is working properly. \n In the lab exercise below, you should remove the old case fan and install a new case fan. Be sure to use proper safety precautions. For the purposes of this lab exercise, you can assume that ESD precautions are in place. \n 以下步驟將使您能夠安裝機箱風扇。首先，在安裝系統中的任何組件之前，必須確保已關閉PC的電源。打開機箱後，您將需要使用十字螺絲刀來拆卸/安裝機箱風扇。如果要更換風扇，只需將舊風扇從機箱中擰出並從插頭（或MOLEX連接，如果您使用較舊的系統）上拔下電纜，即可將其卸下。要安裝新風扇，請將風扇保持在安裝位置，以使螺釘孔與外殼上的孔對齊。一隻手將風扇固定到位，另一隻手用四顆螺釘將其固定到位。某些型號使用塑料摩擦夾而不是螺釘將風扇固定到位。如果系統是這樣的，只需取消卡扣，卸下風扇， \n 固定風扇後，需要將風扇連接到未使用的風扇接頭連接器上，以為風扇供電。 標頭的鍵可確保正確連接，並防止您向後插入標頭。 四針接頭連接器將與三針風扇一起使用，但是您將無法控制風扇速度，因為這只能由連接器中的第四針執行。 \n 完成安裝風扇後，請確保使用正確的電纜管理技術和一些紮帶來布放風扇和其他電纜。 正確的電纜管理可防止風扇在旋轉時撞到電纜，並有助於適當的氣流以提高冷卻效率。 確保打開計算機電源，並確保風扇正常工作。 \n 在下面的實驗練習中，您應該卸下舊的機箱風扇並安裝新的機箱風扇。 確保使用適當的安全預防措施。 就本練習而言，您可以假定已採取ESD預防措施。 \n Liquid Cooling: Installation\xa0 液體冷卻：安裝 \n Installing liquid cooling systems in contemporary computers is not as difficult as it once was. As always, begin by powering down the computer and unplugging it. Then open the case and install the processor in the same manner as detailed earlier. Next, clean the CPU and water block and remove dust and debris. Then, use thermal paste, just like we did in the active cooling systems. After that, instead of using a traditional heat sink, attach a water block. Next, install the radiator in place of the rear case fan. Then connect the radiator to the reservoir. Be sure to reconnect the power, power on the computer, and make sure the liquid cooling system is working properly. Then close the case. \n 在當代計算機中安裝液體冷卻系統並不像以前那樣困難。 與往常一樣，首先關閉計算機電源並拔下電源插頭。 然後打開機箱，並按照與前面所述相同的方式安裝處理器。 接下來，清潔CPU和水塊，並清除灰塵和碎屑。 然後，像在主動冷卻系統中一樣使用導熱膏。 之後，請使用水冷塊代替傳統的散熱器。 接下來，安裝散熱器代替後箱風扇。 然後將散熱器連接到水箱。 確保重新連接電源，打開計算機電源，並確保液體冷卻系統正常運行。 然後關閉外殼。 \n \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'W4-9', 'text': '', 'tags': '', 'url': 'W4-9.html'}, {'title': 'W7', 'text': '<<<<<<< HEAD \n', 'tags': '', 'url': 'W7.html'}, {'title': 'HW2', 'text': 'import urllib.request\ntarget_url = "https://nfulist.herokuapp.com/?semester=1091&courseno=0762"\ncp1a = []\nfor line in urllib.request.urlopen(target_url):\n    cp1a.append(int(line.decode(\'utf-8\').rstrip()))\nfrom random import shuffle\nshuffle(cp1a)\nstep = 12\ncp1aGroup = []\nm = int(len(cp1a)/step)\nfor i in range(0,len(cp1a),step):\n    cp1aGroup.append(cp1a[i:i+step])\nprint(cp1aGroup)\n=======\n\n \n \n kaggle \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'W10-14', 'text': '', 'tags': '', 'url': 'W10-14.html'}, {'title': 'HW3', 'text': '練習2\xa0 \n Odd Or Even\xa0 (奇數或偶數) \n input if types int equality comparison numbers mod \n Again, the exercise comes first (with a few extras if you want the extra challenge or want to spend more time), followed by a discussion. Enjoy! \n 輸入類型是否等於相等比較數mod \n 再次，練習是第一位的（如果您想要額外的挑戰或想要花費更多的時間，可以添加一些其他內容），然後進行討論。 請享用！ \n Exercise 2 (and Solution)\xa0\xa0 \n 練習 2 （和解決方案） \n Ask the user for a number. Depending on whether the number is even or odd, print out an appropriate message to the user. \xa0 Hint: how does an even / odd number react differently when divided by 2? \n 詢問用戶一個數字。根據數字是偶數還是奇數，向用戶打印一條適當的消息。 提示：偶數/奇數除以2時的反應如何？ \n Extras: \n \n If the number is a multiple of 4, print out a different message. \n Ask the user for two numbers: one number to check (call it \xa0 num ) and one number to divide by ( check ). If \xa0 check \xa0 divides evenly into \xa0 num , tell that to the user. If not, print a different appropriate message. \n \n 附加功能： \n \n 如果數字是4的倍數，請打印出另一條消息。 \n 向用戶詢問兩個數字：一個數字要檢查（稱為 num ），另一個數字要除以（ check ）。 如果 check 平均分為 num ，請告知用戶。 如果不是，請打印其他適當的消息。 \n \n Discussion\xa0\xa0 討論區 \n Concepts for this week: \n \n Modular arithmetic (the modulus operator) \n Conditionals (if statements) \n Checking equality \n \n 本週的概念： \n \n 模塊化算術（模運算符） \n 有條件的（如果語句） \n 檢查平等 \n \n \n Modular arithmetic (the modulus operator) \n 模塊化算術（模運算符） \n We have been doing arithmetic (addition, subtraction, multiplication, division) since elementary school, and often it is useful for us to find not the answer to a division problem but the remainder when we do a division operation. This operation is called the “modulus operation.” For example, when I divide 5 by 3, the remainder is 2, and the sentence reads like this: “5 modulo 3 is 2.” \n 從小學開始，我們就一直在進行算術運算（加，減，乘，除），這對於我們尋找除法問題不是答案，而是對除法運算的其餘部分有用。 該操作稱為“模運算”。 例如，當我將5除以3時，餘數為2，句子的內容如下：“ 5模3為2”。 \n \n In the Python shell: \n   \n >>>   5   %   3 \n 2 \n >>>   6   %   3 \n 0 \n >>>   7   %   3 \n 1 \n \n The \xa0 % \xa0 sign is exactly the modulus operator. \n 該 % 標誌是完全模運算符。 \n Conditionals\xa0\xa0 有條件的 \n \n When a computer (or a program) needs to decide something, it checks whether some condition is satisfied, which is where the term conditional comes from. Conditionals are a fancy way of saying “if statements”. If Michele was born in New York, she has an American passport. That statement is a conditional (if statement) that in this case is true. In Python this works the same way: \n 當計算機（或程序）需要做出決定時，它會檢查是否滿足某些條件，這就是 條件 一詞的來源。 條件語句是說“ if語句”的一種奇特的方式。 如果米歇爾（Michele）出生於紐約，則她擁有美國護照。 該語句是在這種情況下為真的條件（如果語句）。 在Python中，這是相同的方式： \n   \n if   age   >   17 :  \n   print ( "can see a rated R movie" ) \n elif   age   <   17   and   age   >   12 : \n   print ( "can see a rated PG-13 movie" ) \n else :  \n   print ( "can only see rated PG movies" ) \n \n When the program gets to the \xa0 if \xa0 statement, it will check the value of the variable called \xa0 age \xa0 against all of the conditions, in order, and will print something to the screen accordingly. Note that \xa0 elif \xa0 is a portmanteau of “else” and “if”. So if the variable \xa0 age \xa0 holds the value 15, the statement \xa0 "can see a rated PG-13 movie" \xa0 will be printed to the screen. \n Note how the statement \xa0 elif age < 17 and age > 12 \xa0 has the statement \xa0 and \xa0 - you can use \xa0 or \xa0 and \xa0 not \xa0 in the same way. Understanding a bit about logic and how it works, or being able to rationally think about logic will help you get the conditions right - oh, and a lot of practice. \n 當程序到達該 if 語句時，它將按 age 所有條件依次檢查被調用的變量的值，並將相應的內容打印到屏幕上。請注意，這 elif 是“ else”和“ if”的組合。因此，如果變量 age 的值保持為15，則該語句 "can see a rated PG-13 movie" 將被打印到屏幕上。 \n 請注意該語句如何 elif age < 17 and age > 12 具有該語句 and -您可以使用 or 和 not 以相同的方式。 了解一些有關邏輯及其原理的知識，或者能夠理性地思考邏輯，將幫助您找到合適的條件-哦，還有很多練習。 \n Checking for equality (and comparators in general) \n 檢查是否相等（以及一般的比較器） \n \n A fundamental thing you want to do with your program is check whether some number is equal to another. Say the user tells you how many questions they answered incorrectly on a practice exam, and depending on the number of correctly-answered questions, you can suggest a specific course of action. For integers, strings, floats, and many other variable types, this is done with a simple syntax: ==. To explicitly check inequality, use !=. \n 您要對程序執行的基本操作是檢查某個數字是否等於另一個數字。假設用戶告訴您他們在實踐考試中有多少個答錯了的問題，並且根據正確回答的問題的數量，您可以提出具體的操作建議。對於整數，字符串，浮點數和許多其他變量類型，這是通過簡單的語法完成的： == 。 要顯式檢查不平等，請使用 != 。 \n   \n if   a   ==   3 :  \n   print ( "the variable has the value 3" ) \n elif   a   !=   3 : \n   print ( "the variable does not have the value 3" ) \n \n Notice how in this example, the condition is redundant. In the first condition we are checking whether the variable \xa0 a \xa0 has the value 3 and in the second, we are checking whether \xa0 a \xa0 does NOT have the value 3. However, if the first condition is not true ( a \xa0 is in fact not 3), then the second condition is by definition true. So a more efficient way to write the above conditional is like this: \n 請注意，在此示例中，條件是多餘的。在第一個條件中，我們正在檢查變量是否 a 具有值3，在第二個 條件中，我們正在檢查變量 是否 a 不具有值3。但是，如果第一個條件不成立（ a 實際上不是3），則第二個條件根據定義，條件是正確的。 因此，編寫上述條件的更有效方法如下： \n \n if   a   ==   3 :  \n   print ( "the variable has the value 3" ) \n else : \n   print ( "the variable does not have the value 3" ) \n \n The same equality / inequality comparisons work for strings. \n 相同的相等/不相等比較適用於字符串。 \n \n num = int(input("enter a number to check: "))\ncheck = int(input("enter a number to divide by: "))\n\nif num % 4 == 0: \n    print(num, "this number is a multiple of 4")\nelif num % 2 == 0:\n    print(num, "this is an even nummber")\nelse:\n    print(num, "its an odd number")\n\nif check % 2 == 0:\n    print(num, "Can devide evenly by:", check)\nelse:\n    print(num, "Can\'t be devide evenly by:", check) \n \n >y:\\python38\\pythonw.exe -u "HW3-2.py" enter a number to check: 4 enter a number to divide by: 3 4 this number is a multiple of 4 4 Can\'t be devide evenly by: 3 \n 練習7 \n __author__ = \'jhunt\'\n\na = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\nb = [number for number in a if number % 2 == 0]\n\nprint(b) \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'W15-18', 'text': '', 'tags': '', 'url': 'W15-18.html'}, {'title': 'HW4', 'text': '', 'tags': '', 'url': 'HW4.html'}, {'title': '課程筆記', 'text': '', 'tags': '', 'url': '課程筆記.html'}]};