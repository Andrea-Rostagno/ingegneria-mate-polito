---
tipo: competenza
area: fisica
corsi: [Chimica, Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["Bohr model", "atomo di Bohr", "modello di Bohr-Sommerfeld", "Bohr-Sommerfeld model", "stato fondamentale", "stato eccitato", "raggio di Bohr", "livelli energetici quantizzati", "costante di Rydberg", "Rydberg constant"]
tags: [competenza, area/fisica]
---

# Modello atomico di Bohr

> Bohr (1913) applica la quantizzazione all'atomo di Rutherford: l'elettrone percorre solo orbite di energia permessa e passa dall'una all'altra emettendo o assorbendo un fotone.

## Definizione / enunciato
Ipotesi: l'elettrone dell'idrogeno ruota su orbite circolari **stazionarie**, numerate dal numero quantico principale $n=1,2,3,\dots$; su di esse non irraggia (la forza centrifuga è bilanciata dall'attrazione del nucleo). Più piccolo $n$, più piccolo il raggio e minore l'energia. Il livello più basso è lo **stato fondamentale** ($r=53$ pm $=0{,}53$ Å), gli altri sono **stati eccitati**. Ogni salto di orbita emette o assorbe un fotone di energia pari alla differenza tra i livelli: è una riga dello spettro.
**Sommerfeld (1916):** orbite anche ellittiche; ogni livello $n$ si divide in sottolivelli con numero quantico secondario $l=0,\dots,n-1$, legato al momento angolare dell'elettrone (per spiegare lo spettro dell'elio).
**Limiti:** spiega bene solo l'idrogeno; localizzare l'elettrone su un'orbita precisa viola il principio di indeterminazione.

## Formule chiave
$$E_n=-R_H\frac1{n^2},\qquad R_H=2{,}18\cdot10^{-18}\ \mathrm J,\qquad h\nu=\Delta E=E_{n_2}-E_{n_1}$$

## Intuizione
È la "scalinata quantica": l'elettrone sta solo sui gradini, e ogni salto tra gradini corrisponde a un fotone di energia fissata.

## Come si usa
Dai valori di p. 47: la transizione da $n=3$ a $n=2$ libera $-2{,}42\cdot10^{-19}-(-5{,}45\cdot10^{-19})=3{,}03\cdot10^{-19}$ J, che è la riga rossa a 657 nm (calcolo sui dati delle slide). Per $n=1$ si ritrova $E_1=-R_H=-2{,}18\cdot10^{-18}$ J, il valore della figura di p. 47.

## Nei corsi
- **Chimica** (triennale): Lezione 4 (fine) e riepilogo all'inizio della lezione 5. Fonti: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 04 - Atomo.pdf` (lezione 4, pp. 49-64); `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 05 - Atomo quantistico.pdf` (lezione 5, p. 3).
- **Fisica 2** (triennale): tra le evidenze contro la fisica classica (atomo planetario instabile, righe $\frac1\lambda=R\left(\frac1{m^2}-\frac1{n^2}\right)$). Ipotesi $L=n\hbar=n\frac{h}{2\pi}$ con $m\frac{v^2}{r}=\frac{e^2}{4\pi\varepsilon_0r^2}$ e $H=\tfrac12mv^2-\frac{e^2}{4\pi\varepsilon_0r}$: $r=n^2\frac{4\pi\varepsilon_0\hbar^2}{me^2}=n^2a$, $H=-\frac1{n^2}\frac{e^2}{8\pi\varepsilon_0a}$; con $H_n-H_m=h\nu=hc/\lambda$ si ricava $R=\frac{me^4}{8\varepsilon_0^2h^3c}=1{,}09\cdot10^7$ m⁻¹. Fonte: `triennale/ANNO 2/fisica 2/lezioni/46&49&50. LEZIONE.pdf` (pp. 11-16).
- **Quantum physics** (triennale): solo di passaggio nella dispensa di V. Penna: raggio di Bohr $a=\hbar^2/e^2m_e=0{,}529\times10^{-10}$ m (unità di Gauss), magnetone di Bohr, principio di corrispondenza; per $\ell=n-1$ e $n$ grande gli stati dell'idrogeno ricostruiscono orbite circolari con $\langle r\rangle\simeq an^2/Z$. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 52, 119, 121-122).

## Prerequisiti
- [[Modelli atomici di Thomson e Rutherford]]: Bohr quantizza le orbite dell'atomo planetario
- [[Quantizzazione dell'energia e fotoni]]: il salto di orbita emette hν = ΔE
- [[Spettri atomici]]: Bohr ricava le righe dell'idrogeno

## Porta a
- Nessuno.

## Collegati
- [[Principio di indeterminazione di Heisenberg]]: le orbite definite violano l'indeterminazione
- [[Forza centripeta]]: la forza centrifuga è bilanciata dall'attrazione del nucleo
- [[Atomo di idrogeno]]: stessi livelli En ∝ -1/n², ora da Schrödinger
