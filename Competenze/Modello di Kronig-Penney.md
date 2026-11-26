---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Kronig-Penney model", "teorema di Bloch", "Bloch theorem", "funzioni di Bloch", "potenziale periodico", "bande permesse e proibite", "band gap"]
tags: [competenza, area/fisica]
---

# Modello di Kronig-Penney

> Un elettrone in una schiera periodica di buche di potenziale non può avere ogni energia: la condizione $|\cos k(a+b)|\le1$ separa bande di energia permesse da bande proibite.

## Definizione / enunciato
Ipotesi ideali: potenziale fatto da buche di larghezza $a$ separate da barriere $V_0$ di larghezza $b$; problema monodimensionale; solido infinito; un solo elettrone; $T=0$ K (nuclei fissi). **Teorema di Bloch:** con potenziale periodico le soluzioni sono funzioni di Bloch, cioè un'onda piana modulata da una funzione con il periodo del reticolo. Sostituendo nelle due regioni e imponendo continuità di $u$ e $du/dx$ in $x=0$ e $x=a$/$x=-b$ si ottiene un sistema omogeneo 4×4 in $A,B,C,D$, che ha soluzioni non banali solo se il determinante è nullo: ne esce la relazione $E=E(k)$.

## Formule chiave
$$\alpha^2=\frac{2m}{\hbar^2}E,\qquad \gamma^2=\frac{2m}{\hbar^2}(V_0-E)$$
$$\Psi(x)=u(x)e^{ikx},\qquad u[x+(a+b)]=u(x)$$
$$\frac{\gamma^2-\alpha^2}{2\alpha\gamma}sh(\gamma b)\sin(\alpha a)+ch(\gamma b)\cos(\alpha a)=\cos[k(a+b)],\qquad |\cos[k(a+b)]|\le1$$
Barriere alte e sottili ($b\to0$, $V_0b$ costante, $V_0\gg E$):
$$P\frac{\sin(\alpha a)}{\alpha a}+\cos(\alpha a)=\cos[ka],\qquad P=\frac{ma}{\hbar^2}V_0b$$
Limiti:
$$P\to\infty:\ \alpha a=n\pi,\ E=\frac{\pi^2\hbar^2}{2ma^2}n^2;\qquad P\to0:\ \alpha=k,\ E=\frac{\hbar^2}{2m}k^2$$

## Intuizione
$P$ misura quanto le buche sono "chiuse". Con $P$ grande ogni buca è isolata e si ritrovano i livelli discreti della scatola; con $P\to0$ l'elettrone è libero e ha un continuo di livelli ($\hbar k=p$: $k$ è la quantità di moto). In mezzo, atomi a distanza media e interagenti, i livelli si allargano in bande.

## Come si usa
Si traccia il primo membro in funzione di $\alpha a$: solo dove sta tra $-1$ e $+1$ l'energia è permessa. Riportando $E$ contro $k_x$ si vedono intervalli permessi e proibiti, e la relazione $E$-$k_x$ risulta periodica (`63&64&65&66. LEZIONE.pdf` pp. 15-17).

## Nei corsi
- **Fisica 2** (triennale): lezioni 63-66, "Bande di energia degli elettroni"; potenziale coulombiano reale approssimato da buche rettangolari. Fonti: `triennale/ANNO 2/fisica 2/lezioni/63&64&65&66. LEZIONE.pdf` (pp. 1-17).

## Prerequisiti
- [[Effetto tunnel]]: stesso raccordo per buche e barriere
- [[Particella in una scatola]]: limite di buche indipendenti

## Porta a
- [[Zone di Brillouin]]: E(k) è periodica in k

## Collegati
- [[Legame metallico]]: origine fisica della teoria delle bande
