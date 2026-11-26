---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Analisi funzionale]
livello: [triennale]
aliases: ["Gram-Schmidt process", "Gram-Schmidt orthonormalization", "ortonormalizzazione di Gram-Schmidt", "metodo di Gram-Schmidt", "ortogonalizzazione"]
tags: [competenza, area/algebra-geometria]
---

# Procedimento di Gram-Schmidt

> Algoritmo che trasforma un insieme libero $(v_1,\dots,v_n)$ in una base ortonormale del suo span: a ogni passo si sottraggono le proiezioni sui versori già trovati e si normalizza.

## Definizione / enunciato
Dato un insieme libero $S=(v_1,\dots,v_n)$ di uno spazio vettoriale euclideo:
$$u_1=\frac{v_1}{\|v_1\|},\qquad v'_k=v_k-\sum_{i=1}^{k-1}\langle u_i,v_k\rangle u_i,\qquad u_k=\frac{v'_k}{\|v'_k\|}\quad(k=2,\dots,n).$$
$(u_1,\dots,u_n)$ è una base ortonormale di $\mathcal L\{v_1,\dots,v_n\}$, e $\mathcal L\{u_1,\dots,u_k\}=\mathcal L\{v_1,\dots,v_k\}$ per ogni $k$. Se a un passo $(u_1,\dots,u_{k-1},v_k)$ è già ortonormale, $v_k$ si tiene così com'è.

**Teorema** (Notari, Teor. 5). Ogni sottospazio di $\mathbb R^n$ ha una base ortonormale.

## Formule chiave
$$\mathrm{pr}_{v_1}(v_2)=\|v_2\|\cos\theta\,u_1=\langle u_1,v_2\rangle u_1,\qquad v'_2=v_2-\langle u_1,v_2\rangle u_1$$

## Intuizione
A ogni passo si toglie al nuovo vettore la sua "ombra" sullo spazio già costruito: resta la componente ortogonale, che porta la direzione nuova, e la si normalizza. Poiché i $v_k$ sono indipendenti, $v'_k\neq0$ e la divisione è lecita.

## Come si usa
- Diagonalizzazione ortogonale con autovalori multipli: nell'autospazio di dimensione $>1$ si ortonormalizza la base trovata (p. 44 di `12_Eigenvalues,...pdf`: si tiene $x_1$ e si sceglie $x'_2$ con $\langle x_1,x'_2\rangle=0$).
- Base o.n. di un sottospazio di $\mathbb R^5$ generato da 3 vettori: stesso schema (p. 13 di `13. Eucliean Vector Spaces...pdf`).
- Proiezione su un sottospazio: serve una sua base ortonormale, che si costruisce con Gram-Schmidt.

## Nei corsi
- **Algebra lineare** (triennale): spazi euclidei (slide di S. Mercadante, diagramma di flusso a passi (a)-(z)); nel modulo numerico l'idea ritorna nella fattorizzazione QR. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/13. Eucliean Vector Spaces - Real Quadratic Forms v1.14.0.pdf` (p. 10-13); `Appunti, riassunti e formulari/euclidei-slides.pdf` (R. Notari, §4).
- **Analisi funzionale** (triennale): Teor. 6.24 in uno spazio pre-hilbertiano reale o complesso: da $\{x_1,\dots,x_n\}$ linearmente indipendente si costruisce $\{e_1,\dots,e_n\}$ ortonormale con $\operatorname{span}\{x_1,\dots,x_j\}=\operatorname{span}\{e_1,\dots,e_j\}$ per ogni $j$ (dimostrazione per induzione, $e_1=x_1/\|x_1\|$). Applicato induttivamente a un denso numerabile, dimostra che ogni spazio di Hilbert separabile ha una base ortonormale (Teor. 6.46). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 69-70, 82).

## Prerequisiti
- [[Proiezione ortogonale di un vettore]]: a ogni passo si sottraggono le proiezioni
- [[Spazio vettoriale euclideo]]: costruzione di basi ortonormali
- [[Base e dimensione]]: costruisce una base ortonormale

## Porta a
- [[Complemento ortogonale]]: proiezione su U tramite una sua base ortonormale
- [[Base ortonormale di uno spazio di Hilbert]]: costruzione della base in un Hilbert separabile (Analisi funzionale)

## Collegati
- [[Fattorizzazione QR]]: A = QR è Gram-Schmidt sulle colonne di A, scritto in forma matriciale (collegamento concettuale, non nelle slide)
- [[Endomorfismo simmetrico]]: base ortonormale dentro un autospazio di dimensione > 1
- [[Cambiamento di base]]: con basi ortonormali la matrice di passaggio è ortogonale
