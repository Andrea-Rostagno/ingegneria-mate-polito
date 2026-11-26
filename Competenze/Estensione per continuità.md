---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["extension by continuity", "teorema di estensione per operatori limitati", "extension theorem for bounded operators", "estensione di operatori limitati", "BLT theorem"]
tags: [competenza, area/analisi]
---

# Estensione per continuità

> Un operatore limitato definito su un sottospazio denso si estende in modo unico, con la stessa norma, a tutto lo spazio, purché il codominio sia completo.

## Definizione / enunciato
**Teor. 7.23.** Siano $X$ normato, $Y$ di Banach e $D\subseteq X$ un sottospazio denso (con la norma indotta). Per ogni $T\in\mathcal B(D,Y)$ esiste un unico $\widetilde T\in\mathcal B(X,Y)$ con $\widetilde T|_D=T$, e
$$\|\widetilde T\|_{op}=\|T\|_{op}.$$
**Cor. 7.25.** Lo stesso vale per $T\in\mathcal B(D,E)$ con $E\subseteq Y$ sottospazio (si estende a valori in $Y$).

## Formule chiave
Definizione dell'estensione: per $x\in X$ si prende $x_n\in D$ con $x_n\to x$ e si pone $\widetilde Tx=\lim_nTx_n$; il limite esiste perché $(Tx_n)$ è di Cauchy in $Y$ ($\|Tx_n-Tx_m\|\le\|T\|_{op}\|x_n-x_m\|$) e $Y$ è completo.
Unicità: due estensioni coincidono su $D$, quindi $\operatorname{Ker}(\widetilde T-\widetilde T')\supseteq\overline D=X$ (il nucleo è chiuso).

## Intuizione
Per l'unicità bastano densità e continuità (non serve la completezza di $Y$); per l'esistenza la completezza di $Y$ è essenziale, perché il valore va costruito come limite. È il modo standard di definire oggetti "per approssimazione".

## Come si usa
Si definisce un operatore su una classe comoda e densa (funzioni continue, funzioni a scalino, $c_{00}$) dove le formule hanno senso, si prova una stima $\|Tx\|\le C\|x\|$ e lo si estende a tutto lo spazio ($L^p$, $\ell^p$). Per funzionali ($Y=\mathbb F$) Hahn-Banach permette di estendere anche da sottospazi **non** densi, ma senza unicità.

## Nei corsi
- **Analisi funzionale** (triennale): §7.3 "Estensione di operatori limitati" (Teor. 7.23, Cor. 7.25). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 102-104); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (p. 10).

## Prerequisiti
- [[Operatore lineare limitato]]: si estende un operatore limitato
- [[Spazio di Banach]]: completezza del codominio
- [[Sottospazi densi di Lp]]: tipici domini densi da cui estendere

## Collegati
- [[Teorema di Hahn-Banach]]: estensione di funzionali da sottospazi qualsiasi
